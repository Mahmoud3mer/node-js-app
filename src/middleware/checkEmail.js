import userModel from "../../database/model/user.model.js";
import bcrypt from 'bcrypt'

export const checkEmail = async(req ,res,next) =>{
    let userFounded = await userModel.findOne({email: req.body.email})
    if (userFounded) return res.status(409).json({message:"user alredy register"});

    req.body.password = bcrypt.hashSync(req.body.password,8);

    next()
}