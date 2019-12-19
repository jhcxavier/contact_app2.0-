import React, { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Context } from "../store/appContext";

const Modale = () => {
	const [show, setShow] = useState(false);
	const { store, actions } = useContext(Context);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant="none">
				<i className="fas fa-trash-alt" onClick={handleShow} />
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>{"Woohoo, you're reading this text in a modal!"}</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>

					<Button variant="primary" onClick={() => actions.deleteContact(id)}>
						Delete
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Modale;
