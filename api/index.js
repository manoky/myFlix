import express from 'express';
import mongoose from 'mongoose';
import {ObjectID} from 'mongoose';
import passport from 'passport';
import Users from '../models/User';
import Comments from '../models/Comment';
import Movies from '../models/Movie';



mongoose.connect('mongodb://localhost:27017/movieApi',{useNewUrlParser: true,
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

 router.get('/movies/:title', (req, res) => {
   const title = req.params.title;
   Movies.findOne({Title: title})
   .then(movie => res.json(movie))
   .catch(err => res.status(500).send(`Error: ${err}`))
 });


router.post('/movies', (req, res) => {
  const { Title, Description, Trailer, Featured,ImagePath,
            GName, GDesc,DName,Bio,DoB, PoB
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
          Description: GDesc
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
  console.log(id)

  Movies.findOneAndRemove({_id: mongoose.Types.ObjectId(id)})
  .then(movie => {
    res.send(`${movie.Title} was deleted`)
  })
  .catch(err => res.status(500).send(`Error: ${err}`))
})

/****************************
    Users requests
 ****************************/

router.get('/users',passport.authenticate('jwt',{session: false}), (req, res) => {
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
    console.log(user)
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
            console.log(user)
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
      console.log(updatedUser);
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
 


export default router;

