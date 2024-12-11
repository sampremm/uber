const captionmodel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const {validationResult} = require('express-validator');
const blacklistmodel = require("../models/balcklist.model");

module.exports.registercaptain=async (req, res,) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});

    }

    const { fullname, email, password,vechicle } = req.body;


    const iscaptainalreadyexist = await captionmodel.findOne({email});

    if (iscaptainalreadyexist) {
        return res.status(400).json({ message: "Captain already exists" });
    }

    const hashPassword = await captionmodel.hashedPassword(password);

    const captain = await captainService.createCaptain({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password: hashPassword,
        color: vechicle.color,
        plate: vechicle.plate,
        capacity: vechicle.capacity,
        vechicleType: vechicle.vechicleType
    });

    const token = captain.generateAuthToken();

    res.status(201).json({token,captain});
}

module.exports.loginCaptain=async (req, res, next) => {
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        throw new Error(errors.array());
    }
    const {email, password}=req.body;

    const captain= await captionmodel.findOne({email}).select("+password");

    if(!captain){
        return res.status(401).json({message: "Invalid email or password"});
    }

    const ismatch= await captain.comparePassword(password);

    if(!ismatch){   
        return res.status(401).json({message: "Invalid password"});
    }
    
    const token=captain.generateAuthToken();

    res.cookie("token", token);

    res.status(200).json({captain, token});
}

module.exports.getCaptainProfile = async (req, res, next) => {
    res.status(200).json(req.captain);
}

module.exports.logoutCaptain = async (req, res, next) => {
    const token= req.cookies.token || req.headers.authorization?.split(' ')[1];

    await blacklistmodel.create({token});   

    res.clearCookie("token");

    res.status(200).json({message: "Logged out"});
}