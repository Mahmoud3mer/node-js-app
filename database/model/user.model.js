import mongoose from "mongoose";
import { type, version } from "os";

// create schema
const userSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    password:String,
    isConfirmed:{
        type:Boolean,
        default:false
    },
    role:{
        type:String,
        enums:["User","Admin"],
        default:"User"
    }
},{
    timeStamp:true,
    versionKey:false
})


// create model
const userModel = mongoose.model("User",userSchema);

export default userModel;