import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import Grid  from 'gridfs-stream';

import * as dotenv from 'dotenv';
dotenv.config();


import initializePassport from './middlewares/passportConfig.js'


const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

initializePassport(app);

import index from './routes/index.js';
import auth from './routes/auth.js';
import googleAuth from './routes/googleAuth.js';
import service from './routes/service.js';
import order from './routes/order.js';
import cart from './routes/cart.js';
import user from './routes/user.js';
import cashfree from './routes/cashfree.js';

app.use('/', index)
app.use('/auth', auth)
app.use('/googleAuth', googleAuth)
app.use('/service', service)
app.use('/cart', cart);
app.use('/order', order);
app.use('/user', user);
app.use('/cashfree', cashfree);


const CONNECTION_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 5000;
const BASE_URL = process.env.BASE_URL || 'http://localhost:5000';


mongoose
  .connect(CONNECTION_URL,)
  .then(() =>{
  const connection = mongoose.connection;
  const gridfsBucket = new mongoose.mongo.GridFSBucket(connection.db, {
    bucketName: 'uploads'
});
  const gfs = Grid(connection.db, mongoose.mongo);
  gfs.collection('uploads');
  app.set('gfs', gfs); 
  app.set('gridfsBucket', gridfsBucket); 
  app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))
})
  .catch((error) => console.log(error.message));
