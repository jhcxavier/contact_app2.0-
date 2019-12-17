import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import MikePhoto from "../../img/m101.jpg";
import { Context } from "../store/appContext";

export const ContactCard = props => {
	const [state, setState] = useState({});
	const { store, actions } = useContext(Context);

	if (store.contacts == undefined || store.contacts == null) {
		console.log(<h1>Loading...</h1>);
	} else {
		console.log("testeeee", store.contacts);

		return (
			<li className="list-group-item">
				{store.contacts.map((e, index) => (
					<div key={index} className="row w-100">
						<div className="col-12 col-sm-6 col-md-3 px-0">
							<img
								src={MikePhoto}
								alt="Mike Anamendolla"
								className="rounded-circle mx-auto d-block img-fluid"
							/>
						</div>
						<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
							<div className=" float-right">
								<Link to={"/add"}>
									<button className="btn">
										<i className="fas fa-pencil-alt mr-3" />
									</button>
								</Link>

								<button className="btn" onClick={() => alert("test")}>
									<i className="fas fa-trash-alt" />
								</button>
							</div>
							<label className="name lead">{e.full_name}</label>
							<br />
							<i className="fas fa-map-marker-alt text-muted mr-3" />
							<span className="text-muted">{e.address}</span>
							<br />
							<span
								className="fa fa-phone fa-fw text-muted mr-3"
								data-toggle="tooltip"
								title=""
								data-original-title="(870) 288-4149"
							/>
							<span className="text-muted small">{e.phone}</span>
							<br />
							<span
								className="fa fa-envelope fa-fw text-muted mr-3"
								data-toggle="tooltip"
								data-original-title=""
								title=""
							/>
							<span className="text-muted small text-truncate">{e.email}</span>
						</div>
					</div>
				))}
			</li>
		);
	}
};
// };

/**
 * Define the data-types for
 * your component's properties
 //  **/
ContactCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func
};

// /**
//  * Define the default values for
//  * your component's properties
//  **/
ContactCard.defaultProps = {
	onDelete: null
};
