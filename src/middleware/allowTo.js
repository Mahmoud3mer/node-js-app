

export default function allowTo(...arr){
    return (req,res,next) =>{
        if (arr.includes(req.user.role)) {
            next()
        }else{
            res.status(401).json({message:"Not authorized"});
        }
    }
}