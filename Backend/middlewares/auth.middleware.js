const usermodel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const blacklistmodel = require("../models/balcklist.model");
const captainmodel = require("../models/captain.model");

module.exports.authuser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    console.log("Retrieved token:", token);

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const blacklistedToken = await blacklistmodel.findOne({token: token });

    if(blacklistedToken){
       return res.status(401).json({message: "Unauthorized: Token is blacklisted"});
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);


        const user = await usermodel.findById(decoded.id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        req.user = user;
        next();
    } catch (err) {
        return res.status(401).json({ message: "Unauthorized: Token verification failed" });
    }
};

module.exports.authcaptain=async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if(!token){
        return res.status(401).json({message: "Unauthorized"});
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const captain = await captainmodel.findById(decoded.id);

        if(!captain){
            return res.status(404).json({message: "Captain not found"});
        }
        req.captain= captain;
        next();
        
    } catch (error) {
        return res.status(401).json({message: "Unauthorized: Token verification failed"});
    }
}