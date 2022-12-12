const mongoose = require('mongoose');

const ContactFormSchema = mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String
});

const ContactForm = mongoose.model("contactForm", ContactFormSchema);
module.exports = ContactForm;