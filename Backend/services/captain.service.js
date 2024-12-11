const captainmodel = require("../models/captain.model");

module.exports.createCaptain = async ({
    firstname,
    lastname,
    email,
    password,
    color,
    plate,
    capacity,
    vechicleType,
}) => {
    // Validate required fields
    if (!firstname || !email || !password || !color || !plate || !capacity || !vechicleType) {
        throw new Error("All fields are required");
    }

    try {
        // Create the captain entry in the database
        const captain = await captainmodel.create({
            fullname: {
                firstname,
                lastname,
            },
            email,
            password,
            vechicle: {
                color,
                plate,
                capacity,
                vechicleType,
            },
        });

        return captain;
    } catch (err) {
        console.error("Error occurred while creating a captain:", err.message);
        throw new Error("Failed to create captain. Please try again.");
    }
};
