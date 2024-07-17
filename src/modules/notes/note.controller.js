
import noteModel from "../../../database/model/note.model.js"


const addNote = async(req,res) => {
    console.log(req.user)
    req.body.createdBy = req.user.id;
    let note = req.body;

    await noteModel.insertMany(note)
    res.json({message:"Note Added"});

}

const getAllNotes = async(req,res) => {
    console.log(req.user)
    let notes = await noteModel.find({createdBy:req.user.id}).populate({
        path:"createdBy",
        select:"name age -_id"
    })
    res.json({message:"get sccess",notes});
}

const updateNote = async(req,res) => {
    let updatedNote = await noteModel.findOneAndUpdate({_id:req.params.id,createdBy:req.user.id},{title:"Hello"},{new:true});

    updatedNote && res.status(200).json({message:"updated",updatedNote});
    !updatedNote && res.status(404).json({message:"note not found",updatedNote});
}
const deleteNote = async(req,res) => {
    await noteModel.deleteOne({_id:req.params.id,createdBy:req.user.id});

    res.json({message:"deleted"});
}


export{
    addNote,
    getAllNotes,
    updateNote,
    deleteNote
}