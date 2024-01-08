//const mongoose = require('mongoose');

import  mongoose from 'mongoose';
console.log('trying to run readFromMongoose__js')
let CONN = 'mongodb://localhost:27017/admin'
mongoose.connect(CONN)
    .then(()=> console.log('Connected to MongoDb....'))
    .catch(err => console.error('Coundt not connect to mongodb',err))
