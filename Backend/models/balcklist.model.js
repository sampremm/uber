const mongoose = require("mongoose");

const balcklistSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true
    },
    crearedat:{
        type: Date,
        default: Date.now,
        expires: 86400
    }
});

module.exports = mongoose.model("blacklist", balcklistSchema);

