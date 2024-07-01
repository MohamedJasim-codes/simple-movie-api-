import mongoose from 'mongoose';
 //write schema 
const schema = mongoose.Schema({
title:{
    type: String,
    required:true,
    unique:true,
},
desc:{
    type: String,
    required:true,
},


});
export const mymovie = mongoose.model("users",schema);

