import React from "react";

const NewContactForm = ({ onNewContact = (f) => f }) => {
	let first_name, last_name, email, phone, message;
	const submit = (e) => {
		e.preventDefault();
		onNewContact(
			first_name.value,
			last_name.value,
			email.value,
			phone.value,
			message.value
		);
		first_name.value = "";
		last_name.value = "";
		email.value = "";
		phone.value = "";
		message.value = "";
		first_name.focus();
	};

	return (
		<form className="contact100-form validate-form" onSubmit={submit}>
			<span className="contact100-form-title">Send Us A Message</span>
			<label className="label-input100" htmlFor="first-name">
				Tell us your name *
			</label>
			<div
				className="wrap-input100 rs1-wrap-input100 validate-input"
				data-validate="Type first name"
			>
				<input
					ref={(input) => (first_name = input)}
					type="text"
					id="first-name"
					className="input100"
					placeholder="First Name"
					required
				/>
				<span className="focus-input100"></span>
			</div>
			<div
				className="wrap-input100 rs2-wrap-input100 validate-input"
				data-validate="Type last name"
			>
				<input
					ref={(input) => (last_name = input)}
					className="input100"
					type="text"
					name="last-name"
					placeholder="Last name"
					required
				/>
				<span className="focus-input100"></span>
			</div>

			<label className="label-input100" htmlFor="email">
				Enter your email *
			</label>
			<div
				className="wrap-input100 validate-input"
				data-validate="Valid email is required: ex@abc.xyz"
			>
				<input
					ref={(input) => (email = input)}
					id="email"
					className="input100"
					type="text"
					name="email"
					placeholder="Eg. example@email.com"
					required
				/>
				<span className="focus-input100"></span>
			</div>

			<label className="label-input100" htmlFor="phone">
				Enter phone number
			</label>
			<div className="wrap-input100">
				<input
					ref={(input) => (phone = input)}
					id="phone"
					className="input100"
					type="text"
					name="phone"
					placeholder="Eg. +1 800 000000"
				/>
				<span className="focus-input100"></span>
			</div>

			<label className="label-input100" htmlFor="message">
				Message *
			</label>
			<div
				className="wrap-input100 validate-input"
				data-validate="Message is required"
			>
				<textarea
					ref={(input) => (message = input)}
					id="message"
					className="input100"
					name="message"
					placeholder="Write us a message"
					required
				></textarea>
				<span className="focus-input100"></span>
			</div>

			<div className="container-contact100-form-btn">
				<button className="contact100-form-btn">Send Message</button>
			</div>
		</form>
	);
};

export default NewContactForm;
