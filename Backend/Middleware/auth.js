const jwt = require('jsonwebtoken');

exports.requireAuth=(req,res,next)=>{
    try{
        //if token
        const token=res.cookies.token ||res.header('Authorization')?.replace('Bearer ', '');
        if(!token){
            return res.status(401).json({
                success:false,
                message:"unatherised"
            })
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch (err) { 
    console.error('Auth error', err);
    res.status(401).json({ message: 'Invalid token' });
  }

}