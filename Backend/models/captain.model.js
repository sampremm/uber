const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const captainSchema = new mongoose.Schema({
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
            lowercase: true,
            match:[
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                "Please enter a valid email address",
            ],
        },
        password:{
            type: String,
            required: true,
            select: false,
        },
        socketId:{
            type: String
        },
        status: {
            type: String,
            enum: ["active", "inactive"],
            default: "inactive",
        },
        vechicle: {
            color:{
                type: String,
                required: true, 
                minlength:[3, "Color must be at least 3 characters long"]
            },
            plate:{
                type: String,
                required: true, 
                minlength:[3, "Plate must be at least 3 characters long"]
            },
            capacity:{
                type: Number,
                required: true,
                min: [1, "Capacity must be at least 1 person"]
            },
            vechicleType: {
                type: String,
                enum: ["car", "motorcycle", "auto"],
                required: true
            }
        },
        location:{
            lat:{
                type: Number,
            },
            lng:{
                type: Number
            }
    }
    
});
captainSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({id: this._id}, process.env.JWT_SECRET_KEY),expiresIn=process.env.JWT_EXPIRES_IN;
    return token;
}
captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashedPassword = async function(password){
    return await bcrypt.hash(password, 10);
}
const captionmodel = mongoose.model("captain", captainSchema);


module.exports=captionmodel;