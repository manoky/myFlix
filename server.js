const express = require('express');
const bodyParser = require('body-parser');
const validator = require('express-validator');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const api = require('./api');
const compression = require('compression');


const allowedOrigins = '*';
const app = express();

const isDev = process.env.NODE_ENV 


if(isDev==='development') {
  const webpack = require('webpack');
  const config = require('./webpack.config');
  const compiler = webpack(config);


  app.use(require('webpack-dev-middleware')(compiler,{
    noInfo: true,
    publicPath: config.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));

}

app.use(compression());
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(validator());
app.use(cors());
app.options('*', cors());
// app.use(cors({
//   origin: (origin, callback) => {
//     if(!origin) return callback(null, true);
//     if(allowedOrigins.indexOf(origin )=== -1) {
//       const message = `The CORS policy for this application doesn't allow access from ${origin}`
//       return callback(new Error(message), false);
//     }
//     return callback(null, true);
//   }
// }));

//const auth = require('./authorization/auth')(app)



/****************************
    Api calls
 ****************************/
app.use('/api/v1', (req, res, next) => {
  (api)(req, res, next)
})


app.use(express.static(path.resolve(__dirname,'./client/dist')));

app.get('*',(req, res) => {
  res.sendFile(path.resolve(__dirname,'./client/dist/index.html'))
})

const port =  process.env.PORT || 9000;

app.listen(port,"0.0.0.0", ()=> {
  console.log('**********************************');
  console.log(`Server is listening on ${port}`);
  console.log('**********************************');
});
