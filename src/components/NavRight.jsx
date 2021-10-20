import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MovieContext from "./../movieContext";

export default function NavRight() {
	const { cart } = useContext(MovieContext);

	return (
		<div className="d-flex">
			<Link className="btn btn-outline-light" to="/cart">
				<i className="bi-cart-fill me-1"></i>
				Cart
				{cart.length !== 0 && (
					<span className="badge bg-light text-black ms-1 ">{cart.length}</span>
				)}
			</Link>
		</div>
	);
}
