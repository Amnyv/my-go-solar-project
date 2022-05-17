const mongoose = require('../connection');

const schema = new mongoose.Schema({
    Name : String,
    qualification : String ,
    occupation : String ,
    experience : Number,
    mainareaofexperience :  String,
    email : String,

    createAt : { type : Date , default : new Date()}
});

 const model = mongoose.model("experts", schema);
 module.exports = model;