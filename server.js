import express from 'express';
import bodyParser from 'body-parser';
import validator from 'express-validator';
import morgan from 'morgan'
import api from './api';


const app = express();

app.use(morgan('common'));
app.use(bodyParser.json());
app.use(validator());
//const auth = require('./authorization/auth')(app)

/****************************
    Api calls
 ****************************/
app.use('/api/v1', api)



const port =  process.env.PORT || 9000;

app.listen(port,"0.0.0.0", ()=> {
  console.log('**********************************');
  console.log(`Server is listening on ${port}`);
  console.log('**********************************');
});