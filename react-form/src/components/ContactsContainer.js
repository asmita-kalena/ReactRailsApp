import React, { Component } from "react";
import axios from "axios";
import NewContactForm from "./NewContactForm";
import SidePanelContainer from "./SidePanelContainer";
import LocalizationContainer from "./LocalizationContainer";

class ContactsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: [],
		};
		this.addNewContact = this.addNewContact.bind(this);
	}

	componentDidMount() {
		axios
			.get("api/v1/contacts")
			.then((response) => {
				console.log(response);
				this.setState({
					contacts: response.data,
				});
			})
			.catch((error) => console.log(error));
	}

	addNewContact(first_name, last_name, email, phone, message) {
		axios
			.post("/api/v1/contacts", {
				contact: { first_name, last_name, email, phone, message },
			})
			.then((response) => {
				if (response.statusText === "Created") {
					const contacts = [...this.state.contacts, response.data];
					this.setState({ contacts });
					alert("Message Sent Successfully!");
				} else if (response.statusText === "unprocessable_entity") {
					alert("Message failed to send.");
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		return (
			<div className="container-contact100">
				<div className="wrap-contact100">
					<NewContactForm onNewContact={this.addNewContact} />
					<SidePanelContainer />
					<LocalizationContainer />
				</div>
			</div>
		);
	}
}

export default ContactsContainer;
