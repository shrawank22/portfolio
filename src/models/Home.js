const mongoose = require('mongoose');

const HomeSchema = mongoose.Schema({
    intro: String,
    slider: [
        {
            text: String
        }
    ]
});

const HomeDetails = mongoose.model("home", HomeSchema);
module.exports = HomeDetails;