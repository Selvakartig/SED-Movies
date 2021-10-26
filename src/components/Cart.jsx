import React, { useContext } from "react";
import MovieContext from "../movieContext";
import MovieItem from "./MovieItem";
import sadimg from "./src/sad-face.png";

export default function Cart() {
	const { cart, setCart } = useContext(MovieContext);

	const removeMovie = (movie) => {
		const newCart = cart.filter((c) => c.id !== movie.id);
		setCart(newCart);
	};

	if (cart.length === 0) {
		return (
			<div className="className= text-center my-5">
				<h3 className="mb-4">There are no movies in cart!</h3>
				<img src={sadimg} alt="sad face" height="150px" width="150px" />
			</div>
		);
	}

	return (
		<div className="row">
			{cart.map((cart) => (
				<MovieItem
					key={cart.id}
					movie={cart}
					removeMovie={() => removeMovie(cart)}
					removeBtn={true}
				/>
			))}
		</div>
	);
}
