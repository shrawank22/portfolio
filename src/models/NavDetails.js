const mongoose = require('mongoose');

const navbarSchema = mongoose.Schema({
    brandName: String,
    brandIconURL: String,
    links: [
        {
            label: String,
            url: String
        }
    ]
});

const NavDetails = mongoose.model("navbars", navbarSchema);
module.exports = NavDetails;