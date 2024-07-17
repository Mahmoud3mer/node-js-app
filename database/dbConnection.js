import mongoose from "mongoose";

export const dbConnection =
mongoose.connect('mongodb://localhost:27017/nodeTest')
.then(()=> console.log("connected.")).catch((err)=> console.log("Error"));


