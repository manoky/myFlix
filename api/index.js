const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const Users = require('../models/User');
const Comments = require('../models/Comment');
const Movies = require('../models/Movie');
require('dotenv').config();

const dbURL = process.env.MONGO_URL;

mongoose.connect(dbURL,{useNewUrlParser: true,
 useCreateIndex: true,
 useFindAndModify: false
})
  .then(()=> console.log('DB connected Successfully'))
  .catch(err => console.log(err));


const router = express.Router();
const auth = require('../authorization/auth')(router);

/****************************
    Movies requests
 ****************************/

 router.get('/movies', (req, res) => {
   Movies.find()
   .then(movies => res.json(movies))
   .catch(err => res.status(500).send(`Error: ${err}`))
 });

 router.get('/movies/:id', (req, res) => {
   const id = req.params.id;
   Movies.findOne({_id: mongoose.Types.ObjectId(id)})
   .then(movie => res.json(movie))
   .catch(err => res.status(500).send(`Error: ${err}`))
 });


router.post('/movies', (req, res) => {
  const { Title, Description, Trailer, Featured,ImagePath,
            GName, DName, Bio, DoB, PoB
        } = req.body;

  Movies.findOne({Title: Title})
  .then(movie => {
    if(movie) {
      res.send(`${Title} already exist`)
    }else {
      Movies.create({
        Title: Title,
        Description: Description,
        Trailer: Trailer,
        Featured: Featured,
        ImagePath: ImagePath,
        Genre: {
          Name: GName,
        },
        Director:{
          Name: DName,
          Bio:Bio,
          DoB: DoB,
          PoB: PoB
        }
      })
      .then(movie => {
        res.json(movie)
      })
      .catch(err => res.status(500).send(`Error: ${err}`))
    }
  })
  .catch(err => res.status(500).send(`Error ${err}`))
});

router.delete('/movies/:id', (req, res) => {
  const {id} = req.params;

  Movies.findOneAndRemove({_id: mongoose.Types.ObjectId(id)})
  .then(movie => {
    res.send(`${movie.Title} was deleted`)
  })
  .catch(err => res.status(500).send(`Error: ${err}`))
})

/****************************
    Users requests
 ****************************/

router.get('/users',/*passport.authenticate('jwt',{session: false}),*/ (req, res) => {
  Users.find()
  .then(users => res.json(users))
  .catch(err => res.status(500).send(`Error: ${err}`))
});

router.get('/users/:username', (req, res) => {
  const username = req.params.username;
  Users.findOne({Username:username})
    .then(user => res.json(user))
    .catch(err => res.status(500).send(`Error: ${err}`))
});

router.get('/users/:username/favorites', (req, res) => {
  const username = req.params.username;
  Users.findOne({Username: username})
});

//User post request (create new user)
router.post('/users', (req, res) => {
  req.checkBody('Username','username is required').notEmpty();
  req.checkBody('Username','contains non Alphanumeric characters - not allowed').isAlphanumeric();
  req.checkBody('Password','password is required').notEmpty();
  req.checkBody('Email','Email is required').notEmpty();
  req.checkBody('Email','Email does not appear to be valid').isEmail();

  const errors = req.validationErrors();

  if(errors) {
    res.status(422).json(errors);
  }

  const username = req. body.Username;
  const password = req.body.Password;
  const email = req.body.Email;

  const hashPassword = Users.hashPassword(password);
  Users.findOne({Username: username})
  .then(user => {
    if(user) {
      res.status(400).send(`${username} already exist`)
    }
    else {
      Users.findOne({Email: email})
      .then(user => {
        if(user) {
          res.status(400).send(`${email} already exist`)
        }
        else {
          Users.create({
            Username: username,
            Password: hashPassword,
            Email: email
          })
          .then((user) => {
            res.status(201).json(user)
          })
          .catch(err => res.status(500).send(`Error: ${err}`))
        }
      })
    }
  }).catch(err => res.status(500).send(`Error: ${err}`))
});


// Update User
router.put('/users/:username', (req, res) => {
  const username = req.params.username;
  const newUsername = req.body.Username;
  const newEmail = req.body.Email;
  const newPassword = Users.hashPassword(req.body.Password);

  Users.findOneAndUpdate({Username: username},{$set:{
    Username: newUsername,
    Password: newPassword,
    Email: newEmail,
  }},
  {new: true},
  (err, updatedUser) => {
    if(err){
      console.log(err);
      res.status(500).send('Error:',err)
    }else {
      res.json(updatedUser);
    }
  });    
});

// delete User
router.delete('/users/:username', (req, res) => {
  const username = req.params.username;

  Users.findOneAndRemove({Username: username})
    .then(user => {
      if(!user) {
        res.status(400).send(`${username} doesn't exist`)
      }else {
        res.status(200).send(`${username} was deleted`);
      }
    })
});


/****************************
    Genre requests
 ****************************/

router.get('/genres/:name', (req, res) => {
  const name = req.params.name;
   Movies.find({"Genre.Name": name})
     .then(movies => res.json(movies))
     .catch(err => res.status(500).send(`Error ${err}`))
});


/****************************
  Directors requests
****************************/

router.get('/directors/:name', (req, res) => {
  const name = req.params.name;
  Movies.find({"Director.Name": name})
  .then(movies => {
    res.json(movies)
  })
  .catch(err => res.status(500).send(`Error: ${err}`))
});

/****************************
  Comment requests
****************************/

router.get('/comments', (req, res) => {
  Comments.find()
  .then(comments => {
    res.json(comments)
  })
  .catch(err => res.status(500).send(`Error: ${err}`))
});

router.get('/comments/:id', (req, res) => {
  const {id} = req.params;
  Comments.find()
  .where('movie_id').equals(id)
  .then(comments => {
    res.json(comments)
  })
  .catch(err => res.status(500).send(`Error: ${err}`))
})


router.post('/comments', (req, res) => {
  const {comment, userId, movieId, rating} = req.body;

  req.checkBody('comment',' comment is required').notEmpty();
  req.checkBody('rating','rating is required').isNumeric();

  const errors = req.validationErrors();

  if(errors) {
    res.status(422).json(errors);
  }
  Comments.create({
    user_id: userId,
    movie_id: movieId,
    rating: rating,
    comment_body: comment
  })
  .then(comment => {
    res.json(comment);
  })
  .catch(err => res.status(500).send(`Error: ${err}`))
})




module.exports = router;

