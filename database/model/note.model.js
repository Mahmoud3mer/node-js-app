
import mongoose from "mongoose";


const noteSchema = mongoose.Schema({
    title:String,
    description:String,
    // Relation between User model and Note moel
    createdBy:{
        type: mongoose.Types.ObjectId, //objectId reference to User
        ref:"User"
    }
},{
    timeStamp:true
})

const noteModel = mongoose.model("Note",noteSchema);

export default noteModel;