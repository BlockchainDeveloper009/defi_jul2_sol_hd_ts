// // ESM-style import 
//import fs from 'fs';
//import  mongoose from 'mongoose';

// CommonJS-style import => only this works on Nextjs
const mongoose = require('mongoose');
//const fs = require('fs');
const ContractInfo = require('./mongo_schemas/ContractInfo.js');
//import { ContractInfo } from './mongo_schemas/ContractInfo.js'
const filePath = './abi.txt';



console.log('Trying to run readFromMongoose.js');

let CONN = 'mongodb://127.0.0.1:27017/admin';

mongoose.connect(CONN)
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Define the Course model


const Course = mongoose.model('Contractinfos', new mongoose.Schema(ContractInfo))

async function getCourses() {
  console.log(`READcONTRACT_inFO`)
  return await Course
    .find({tags:'backend'})
    .sort({name:1})
    .select({contractAddress:1,author:1,abi:1}) 
 
}

export async function ReadContractInfo(){
  try {
    const courses= await getCourses();
    console.log(`in ReadContractInfo method`)
    console.log(courses); 
    if(courses)
      return courses;
  } catch (error) {
    console.log(`error in reading ContractInfos => ${error.message}`)
    return null;
  }

  return null;
  // const d = JSON.parse<ContractInfo>(courses);
  // console.log(d.contractAddress)
  // fs.appendFile(filePath,courses.toString(),(err)=>{
  //   if(err){
  //     console.error('Error appending to file:', err);
  //   } else {
  //     console.log('Data has been appended to the file successfully!');
  //   }
  // })
}


