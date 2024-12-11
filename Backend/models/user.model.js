const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlength: [3, "First name must be at least 3 characters long"]
        },
        lastname:{
            type: String,
            minlength: [3, "last name must be at least 3 characters long"]
        },
    },
    email:{
        type: String,
        required: true,
        unique: true,
        minlength: [5, "Email must be at least 5 characters long"]
    },
    password:{
        type: String,
        required: true,
        select: false,
    },
    socketId:{
        type: String
    }

});

userSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({id: this._id}, process.env.JWT_SECRET_KEY),expiresIn=process.env.JWT_EXPIRES_IN;
    return token;
}

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashedPassword = async function(password){
    return await bcrypt.hash(password, 10);
}

const usermodel=mongoose.model("user", userSchema);

module.exports=usermodel;