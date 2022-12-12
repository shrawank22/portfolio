require('dotenv').config();
const express = require("express");
const nodemailer = require('nodemailer');
const bp = require('body-parser');
const NavDetails = require('../models/NavDetails');
const HomeDetails = require('../models/Home');
const ServiceDetails = require('../models/Services');
const ContactForm = require('../models/Contact');
const ContactDetails = require('../models/ContactDetails');
const routes = express.Router();


routes.get('/', async (req, res)=>{
	const navDetails = await NavDetails.findOne({
		"_id": process.env.NavbarID
	});
	const homeDetails = await HomeDetails.findOne({
		"_id": process.env.HomeID
	});
	const serviceDetails = await ServiceDetails.find();

	const contactDetails = await ContactDetails.findOne({
		"_id": process.env.ContactID
	});

	// console.log(contactDetails);
	
	res.render('index', {
		navDetails: navDetails, 
		homeDetails: homeDetails, 
		serviceDetails: serviceDetails, 
		contactDetails: contactDetails
	});
});

// routes.get('/home', async (req, res)=>{
// 	const navDetails = await NavDetails.findOne({
// 		"_id": process.env.Navbar_id
// 	});
// 	const homeDetails = await HomeDetails.findOne({
// 		"_id": process.env.HomeID
// 	})
// 	// console.log(navbar.links);
// 	res.render('home', {navDetails: navDetails, homeDetails: homeDetails});
// });

// routes.get('/contact', async (req, res)=>{
// 	const navDetails = await NavDetails.findOne({
// 		"_id": process.env.Navbar_id
// 	});
// 	// console.log(navbar.links);
// 	res.render('contact', {navDetails: navDetails});
// });

routes.post("/", async (req, res)=> {
	const transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user: process.env.GMAIL, 
			pass: process.env.GMAILPW 
		}
	});

	var textBody = `FROM: ${req.body.name} EMAIL: ${req.body.email} MESSAGE: ${req.body.message}`;
	var htmlBody = `<h2>Mail From Contact Form</h2><p>from: ${req.body.name} <a href="mailto:${req.body.email}">${req.body.email}</a></p><p>${req.body.message}</p>`;
	var mail = {
		from: process.env.GMAIL, 
		to: process.env.GMAIL, 
		subject: `Mail From Contact Form(Subject - ${req.body.subject})`,
		text: textBody,
		html: htmlBody
	};
	transporter.sendMail(mail, function (err, info) {
		if(err) {
			console.log(err);
			res.send(err);
			res.json({ message: "message not sent: an error occured; check the server's console log" });
		}
		else {
			res.json({ message: `message sent: ${info.messageId}` });
			res.send("message sent");
		}
	});

	try{
		const data = await ContactForm.create(req.body);
		//console.log(data);
	} catch(e) {
		console.log(e);
	}
});


module.exports = routes;