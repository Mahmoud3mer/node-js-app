import userModel from "../../../database/model/user.model.js";
import bcrypt from 'bcrypt'
import sendEmail from "../../../utility/sendEmail.js";
import jwt from 'jsonwebtoken'
/*
const getAllUsers = async(req,res) => {
    let users = await userModel.find();
    res.json({message:"get success",users});
}

const addUser = async(req,res) => {
    let userAdded = req.body;
    await userModel.insertMany(userAdded);
    res.json({message:"Added"});
}

const updateUser = async(req,res) => {
    let user = await userModel.findByIdAndUpdate(req.params.id,{name:req.body.name},{new:true});
    res.json({message:"Updated",user});
}

const deleteUser = async(req,res) => {
await userModel.deleteOne({_id:req.params.id});
    res.json({message:"Deleted"});
}
*/

const signUp = async(req,res) => {
    // let userFounded = await userModel.findOne({email: req.body.email})
    // if (userFounded) return res.status(409).json({message:"user alredy register"});

    // req.body.password = bcrypt.hashSync(req.body.password,8);
    sendEmail(req.body.email)
    await userModel.insertMany(req.body);
    res.json({message:"Added"});

}

const signIn = async(req,res) => {
    let user = req.body;
    let foundedUser = await userModel.findOne({email:user.email});

    // if (foundedUser && bcrypt.compareSync(user.password,foundedUser.password))
    //     return res.status(200).json({message:"Welcome"});

    // res.status(404).json({message:"email or pass i invalid"});
    
    if (!foundedUser || !bcrypt.compareSync(user.password,foundedUser.password))
        return res.status(404).json({message:"email or pass i invalid"});

    let token = jwt.sign({id:foundedUser.id,role:foundedUser.role},"hoda",{expiresIn:"24h"});

    return res.status(200).json({message:"Welcome",token});
}

const verifyAccount = async(req,res) => {
    console.log(req.params.email)
    let user = await userModel.findByIdAndUpdate({email:req.params.email},{isConfirmed:true},{new:true})
    res.json({message:"Welcome",user})
}


export{
    signUp,
    signIn,
    verifyAccount
}