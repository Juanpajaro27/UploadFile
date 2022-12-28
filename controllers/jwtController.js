const jwt = require("jsonwebtoken")

function verifyToken (req,res,next){
    const token = req.headers['x-access-token']

    if(!token){
        return res.status(401).json({
            auth: false,
            message: "No token Provided"
        })
    }
    const decode = jwt.verify(token,process.env.JWT_secret);
    req.userid = decode._id

    next()
}

module.exports = verifyToken