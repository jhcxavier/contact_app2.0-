import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const EditContact = props => {
	// const feed = props.feed ? props.feed : null;
	// console.log("props.feed", props.feed);
	// const title = feed ? "Edit Feed" : "New Feed";
	// const r = feed ? feed : {};
	const { store, actions } = useContext(Context);
	console.log("edittttt", store.contacts);
	const [name, setName] = useState(store.contacts[props.match.params.index].full_name);
	const [email, setEmail] = useState(store.contacts[props.match.params.index].email);
	const [address, setAddress] = useState(store.contacts[props.match.params.index].address);
	const [phone, setPhone] = useState(store.contacts[props.match.params.index].phone);
	//const title = feed ? "Edit Contact" : "Add new Contact";
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit Contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							defaultValue={name}
							onChange={e => setName(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							defaultValue={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							defaultValue={phone}
							onChange={e => setPhone(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							defaultValue={address}
							onChange={e => setAddress(e.target.value)}
						/>
					</div>
					<Link className="mt-3 w-100 text-center" to="/">
						<button
							type="button"
							className="btn btn-primary form-control"
							onClick={() => actions.editContact(props.match.params.id, name, phone, email, address)}>
							save
						</button>
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

EditContact.propTypes = {
	match: PropTypes.object,
	feed: PropTypes.object
};
