const mongoose = require('mongoose');

const ContactDetailsSchema = new mongoose.Schema({
    lead: String,
    address: [
        {
            icon: String,
            text: String
        }
    ],
    socials: [
        {
            icon: String,
            link: String
        }
    ],
});

const ContactDetails = mongoose.model("contactDetails", ContactDetailsSchema);
module.exports = ContactDetails;