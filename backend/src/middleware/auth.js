const jwt = require('jsonwebtoken');
const auth = (req,res,next) => {
    try{
        let token = req.headers.authorization;
        if(token){
            token = token.split(' ')[1];
            let user = jwt.verify(token,"CHAT-AI")
            req.userId = user.id;
        }
        else{
            res.status(401).json({error:"Unauthorized Error"})
        }
        next();
    }catch(err){
        console.log(err)
        res.status(401).json({error:"Unauthorized Error"})
    }
}
module.exports = auth;