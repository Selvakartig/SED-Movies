import React from "react";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

function Nav() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
			<div className="container px-4 px-lg-5">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<NavLeft />
					<NavRight />
				</div>
			</div>
		</nav>
	);
}

export default Nav;
