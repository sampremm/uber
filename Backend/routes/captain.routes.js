const express = require("express");
const router = express.Router();
const {body}=require ("express-validator");
const captainController = require("../controllers/captain.controller");
const authmiddleware = require("../middlewares/auth.middleware");

router.post(
    "/register",
    [
      body("email").isEmail().withMessage("Invalid email address"),
      body("fullname.firstname").isLength({ min: 3 }).withMessage("Full name must be at least 3 characters long"),
      body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
      body("vechicle.color").isLength({ min: 3 }).withMessage("Color must be at least 3 characters long"),
      body("vechicle.plate").isLength({ min: 3 }).withMessage("Plate must be at least 3 characters long"),
      body("vechicle.capacity").isLength({ min: 1 }).withMessage("Capacity must be at least 1 person"),
      body("vechicle.vechicleType").isIn(["car", "motorcycle", "auto"]).withMessage("Vehicle type must be one of car, motorcycle, or auto"),
    ],
    captainController.registercaptain
  );
  

router.post("/login",[
    body("email").isEmail().withMessage("Invalid email address"),
    body("password").isLength({min:6}).withMessage("password must be at least 6 characters long")
], captainController.loginCaptain);

router.get("/profile",authmiddleware.authcaptain,captainController.getCaptainProfile);

router.get("/logout", authmiddleware.authcaptain, captainController.logoutCaptain);

module.exports = router;