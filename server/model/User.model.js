import mongoose from "mongoose";

const userschema = new mongoose.Schema ( {
    name:{
        type:String,
        required:[true,"name should be require"],
        trim:true
    },
    email:{
        type:String,
        required:[true,"name should be require"],
        trim:true,
        unique:true,
        min:[6 ,"min lenght must b 6 character"],
        max:[12 ,"max lenght must b 6 character"]
    },
    password:{
        type:String,
        required:[true,"name should be require"],
        trim:true
    },
    forgetpassword:{
        type:String,
        
    },
    role:{
        emum:["user","admin"]
    }

},{timestamps:true})

const User = new mongoose.model("User",userschema)


// userschema.pre("")

export default User