import express from 'express';
import { addNote , getAllNotes , updateNote , deleteNote} from './note.controller.js';
import { verifyToken } from '../../middleware/veifyToken.js';
import allowTo from '../../middleware/allowTo.js';

const noteRoutes = express.Router();


// noteRoutes.post("/note",verifyToken,addNote)
// noteRoutes.get("/note",verifyToken,getAllNotes)
// noteRoutes.put("/note/:id", verifyToken , updateNote)
// noteRoutes.delete("/note/:id", verifyToken , deleteNote)

// allow to func
// function allowTo(...arr){
//     return (req,res,next) =>{
//         if (arr.includes(req.user.role)) {
//             next()
//         }else{
//             res.status(401).json({message:"Not authorized"});
//         }
//     }
// }

noteRoutes.use("/note",verifyToken);

noteRoutes.post("/note",allowTo("User"),addNote) //User
noteRoutes.get("/note",allowTo("Admin"),getAllNotes) //Admin
noteRoutes.put("/note/:id" , updateNote)
noteRoutes.delete("/note/:id" , deleteNote)


export default noteRoutes;