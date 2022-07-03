const mongoose=require('mongoose')

const signinSchema=new mongoose.Schema({
    age:{
        type:Number,
        required:true
    },
    email:{
       type:String,
       required:true,
       unique:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:
    {
        type:String,
        required:true
    },
    cpassword:
    {
        type:String,
        required:true
    },
})

const SigninSchema=new mongoose.model("SigninSchema",signinSchema)

module.exports=SigninSchema