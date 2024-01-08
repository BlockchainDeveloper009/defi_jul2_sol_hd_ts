const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/playground')
.then(()=> console.log('Connected to MongoDb....'))
.catch((err: any) => console.error('Coundt not connect to mongodb',err))

