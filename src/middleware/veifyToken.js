import jwt from 'jsonwebtoken'

export const verifyToken = (req,res,next) => {
    let {token} = req.headers;
    jwt.verify(token,'hoda',async(err,decoded)=>{
        if(err) return res.status(401).json({message: "Error",err});

        req.user = decoded
        next()
    })
}