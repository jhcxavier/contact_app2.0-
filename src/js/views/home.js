import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	return (
		<div className="text-center mt-5">
			<p>Email</p>
			<input />
			<p>Password</p>
			<input />
			<br />
			<button>Login</button>
		</div>
	);
};
