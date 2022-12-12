const mongoose = require('mongoose');

const ServicesSchema = mongoose.Schema({
    icon: String,
    title: String,
    desc: String
});

const ServiceDetails = mongoose.model("service", ServicesSchema);
module.exports = ServiceDetails;