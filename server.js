import express from 'express';
import bodyParser from 'body-parser';
import validator from 'express-validator';
import morgan from 'morgan'
import webpack from 'webpack';
import path from 'path';
import cors from 'cors';
import api from './api';
import config from './webpack.config';

const allowedOrigins = ['http://localhost:9000']
const compiler = webpack(config);
const app = express();

app.use(morgan('common'));
app.use(bodyParser.json());
app.use(validator());
app.use(cors({
  origin: (origin, callback) => {
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin )=== -1) {
      const message = `The CORS policy for this application doesn't allow access from ${origin}`
      return callback(new Error(message), false);
    }
    return callback(null, true);
  }
}));
//const auth = require('./authorization/auth')(app)


app.use(require('webpack-dev-middleware')(compiler,{
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use(express.static(path.resolve(__dirname,'./client/dist')))


/****************************
    Api calls
 ****************************/
app.use('/api/v1', (req, res, next) => {
  (api)(req, res, next)
})

const port =  process.env.PORT || 9000;

app.listen(port,"0.0.0.0", ()=> {
  console.log('**********************************');
  console.log(`Server is listening on ${port}`);
  console.log('**********************************');
});
