
import jwt from 'jsonwebtoken'

export const verifyToken = (req,res,next) => {
    let {token} = req.headers;
    console.log(token)
    jwt.verify(token,'bl7',async(err,decoded) => {
        if(err) return res.status(401).json({message: "Error",err});
    
        req.user = decoded; // add new key in req to access decoded
        next();
    })
}