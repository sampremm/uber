const usermodel = require("../models/user.model");
const userService = require("../services/user.service");
const {validationResult} = require('express-validator');
const blacklistmodel = require("../models/balcklist.model");



module.exports.registerUser = async (req, res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()});
}
   const { fullname, email, password } = req.body;

   const isuseralreadyexist = await usermodel.findOne({email});

   if (isuseralreadyexist) {
    return res.status(400).json({ message: "User already exists" });
   }

   const hashPassword = await usermodel.hashedPassword(password);

    const user = await userService.createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password: hashPassword
    })

    const token = user.generateAuthToken();
    res.status(201).json({user, token});

}

module.exports.loginUser=async (req,res,next) =>{
    const errors=validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    const {email, password}=req.body;

    const user= await usermodel.findOne({email}).select("+password");

    if(!user){
        return res.status(401).json({message: "Invalid email or password"});
    }

    const ismatch= await user.comparePassword(password);

    if(!ismatch){
        return res.status(401).json({message: "Invalid password"});
    }
    
    const token=user.generateAuthToken();

    res.cookie("token", token);

    res.status(200).json({user, token}); 

}

module.exports.getUserProfile= async (req, res, next) => {
    res.status(200).json(req.user);
}

module.exports.logoutUser= async (req, res, next) => {
    res.clearCookie("token");
    const token= req.cookies.token || req.headers.authorization?.split(' ')[1];

    await blacklistmodel.create({token});

    res.status(200).json({message: "Logged out"});
}