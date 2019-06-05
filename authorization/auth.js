const jwt = require('jsonwebtoken');
const passport = require('passport');
require('./passport');

const jwtSecret = 'your_jwt_secret';


const generateJWTToken = (user) => {
  return jwt.sign(user, jwtSecret, {
    subject: user.Email,
    expiresIn: '7d',
    algorithm: 'HS256'
  })
}


module.exports = (router) => {
  router.post('/login', (req, res) => {
    passport.authenticate('local', {session: false,successRedirect: '/',
    failureRedirect: '/login'},(err,user, info) => {
      if(err || !user) {
        return res.status(400).json({
          message: 'Something is not right',
          user: user
        })
      }
      
      req.login(user, {session: false}, (err) => {
        if(err) {
          res.send(err);
        }
        //const token = generateJWTToken(user.toJSON());
        return res.json(user)
      })
    })(req, res)
  });
}