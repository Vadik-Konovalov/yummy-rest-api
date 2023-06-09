const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmailToken = (email, token) => {
	const msg = {
		to: email,
		from: process.env.SENDGRID_FROM_EMAIL,
		subject: "Activate user",
		html: `<p>For verify your email click on link below</p> <a href="http://127.0.0.1:3000/user/verify/${token}" target="blank">${token}</>`,
	};
	sgMail.send(msg);
};
const sendEmail = (email, html) => {
	const msg = {
		to: email,
		from: process.env.SENDGRID_FROM_EMAIL,
		subject: "Activate user",
		html,
	};
	sgMail.send(msg);
};
module.exports = {sendEmailToken, sendEmail};
