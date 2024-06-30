
const mongoose =require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:26
    },
    email:{
        type:String,
        required:true
    },
   
    password:{
        type:String,
        required:true,
        minlength:8,
        maxlength:20
    }
})


const User=new mongoose.model('User',userSchema)

module.exports=User