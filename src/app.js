require('dotenv').config();

const express = require("express");
const bp = require('body-parser');
const hbs = require('hbs');

const app = express();

//hbs template engine configuration
app.set('view engine', 'hbs');
app.set("views", "views");
hbs.registerPartials("views/partials")
app.use(express.static("public"));
app.use(express.json());
app.use(bp.urlencoded({extended: true}));

//routes
const routes = require('./routes/main');
app.use('', routes);


//Models exports
const NavDetails = require('./models/NavDetails');
const HomeDetails = require('./models/Home');
const ServiceDetails = require('./models/Services');
const ContactDetails = require('./models/ContactDetails');


//DB Connection
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URL, (err) => {
	if (!err) {
		console.log("DB Connected successfully");
		
		// ContactDetails.create({
		// 	lead: "Always feel free to contact me. I will respond to you as soon as I can.",
		// 	address: [
		// 		{
		// 			icon: "ion-ios-location",
		// 			text: "IIT Kanpur, 208016"
		// 		},
		// 		{
		// 			icon: "ion-ios-telephone",
		// 			text: "+91-6203-xxxxxx"
		// 		},
		// 		{
		// 			icon: "ion-email",
		// 			text: "shrawan8565@gmail.com"
		// 		}
		// 	],
		// 	socials: [
		// 		{
		// 			icon: "ion-social-linkedin",
		// 			link: "https://www.facebook.com/shrawank22"
		// 		},
		// 		{
		// 			icon: "ion-social-facebook",
		// 			link: "https://www.facebook.com/shrawank22"
		// 		},
		// 		{
		// 			icon: "ion-social-instagram",
		// 			link: "ttps://www.instagram.com/shrawank22/"
		// 		},
		// 		{
		// 			icon: "ion-social-twitter",
		// 			link: "https://twitter.com/shrawank22"
		// 		},
		// 		{
		// 			icon: "ion-social-pinterest",
		// 			link: "#"
		// 		}
		// 	],
		// });

		// ServiceDetails.create([
		// 	{
		// 		icon: "ion-monitor",
		// 		title: "Web Design",
		// 		desc: "As design is the silent ambassador for your brand or company. So, I will show your brand or company on web pages as you have imagined to be. "
		// 	},
		// 	{
		// 		icon: "ion-code-working",
		// 		title: "Web Development",
		// 		desc: "Web development broadly refers to the tasks associated with developing websites for hosting via intranet or internet. I will do it for you."
		// 	},
		// 	{
		// 		icon: "ion-camera",
		// 		title: "Photography",
		// 		desc: "Whenever you need to shoot pictures either for your brand or products ,I can provide the best photograper."
		// 	},
		// 	{
		// 		icon: "ion-android-phone-portrait",
		// 		title: "Responsive Desiogn",
		// 		desc: "All of us are continuously prefering smart phones or tablets.Hence we need to have responsibe web pages design so that website look great and adjust according to screen size."
		// 	},
		// 	{
		// 		icon: "ion-monitor",
		// 		title: "Web Design",
		// 		desc: "As design is the silent ambassador for your brand or company. So, I will show your brand or company on web pages as you have imagined to be. "
		// 	},
		// 	{
		// 		icon: "ion-code-working",
		// 		title: "Web Development",
		// 		desc: "Web development broadly refers to the tasks associated with developing websites for hosting via intranet or internet. I will do it for you."
		// 	},
		// 	{
		// 		icon: "ion-camera",
		// 		title: "Photography",
		// 		desc: "Whenever you need to shoot pictures either for your brand or products ,I can provide the best photograper."
		// 	},
		// 	{
		// 		icon: "ion-android-phone-portrait",
		// 		title: "Responsive Desiogn",
		// 		desc: "All of us are continuously prefering smart phones or tablets.Hence we need to have responsibe web pages design so that website look great and adjust according to screen size."
		// 	},
		// 	{
		// 		icon: "ion-monitor",
		// 		title: "Web Design",
		// 		desc: "As design is the silent ambassador for your brand or company. So, I will show your brand or company on web pages as you have imagined to be. "
		// 	},
		// ]);

		// HomeDetails.create({
		// 	intro: "Hii, I'm Shrawan Kumar",
		// 	slider: [
		// 		{
		// 			text: "MTech CSE/Cybersecurity @ IIT Kanpur"
		// 		},
		// 		{
		// 			text: "Blockchain Developer"
		// 		},
		// 		{
		// 			text: "Competitive Programmer"
		// 		},
		// 		{
		// 			text: "Full Stack Developer"
		// 		},
		// 		{
		// 			text: "Web Developer"
		// 		},
		// 		{
		// 			text: "Web Designer"
		// 		},
		// 		{
		// 			text: "SLIET'22"
		// 		}
		// 	]
		// });

		// NavDetails.create({
		// 	brandName: "Shrawan",
		// 	brandIconURL: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=45&q=45",
		// 	links: [
		// 		{
		// 			label: "Home",
		// 			url: "/#home"
		// 		},
		// 		{
		// 			label: "About",
		// 			url: "/#about"
		// 		},
		// 		{
		// 			label: "Services",
		// 			url: "/#service"
		// 		},
		// 		{
		// 			label: "Work",
		// 			url: "/#work"
		// 		},
		// 		{
		// 			label: "Contact",
		// 			url: "/#contact"
		// 		}
		// 	]
		// });
	} else {
		console.log(err);
	}
});



const PORT = process.env.PORT || 8080;
const IP = process.env.IP || "0.0.0.0";

app.listen(PORT, IP, () => 
	console.log(`Server started on http://localhost:${PORT}`)
);
