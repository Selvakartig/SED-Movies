import React, { useContext } from "react";
import MovieContext from "./../movieContext";

export default function MovieItem(props) {
	const { movie, handleCart, removeBtn, removeMovie } = props;

	const { cart } = useContext(MovieContext);

	const toFindAlreadyAddedToCart = () => {
		const c = cart.find((c) => c.id === movie.id);
		return c;
	};

	const classSelector = () => {
		return removeBtn ? "btn btn-danger" : "btn btn-outline-dark mt-auto";
	};

	return (
		<div id="movie-cards" className="col-md-6 col-lg-3 mb-5 ">
			<div className="card h-100 ">
				<img className="card-img-top " src={movie.pic} alt={movie.name} />

				<div className="card-body p-2">
					<div className="text-center">
						<h5 className="fw-bolder">{movie.name}</h5>
						<h6>
							<i className="bi bi-star-fill"></i>
							{movie.rate}
						</h6>
					</div>
				</div>

				<div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
					<div className="text-center">
						<button
							className={classSelector()}
							onClick={() =>
								removeBtn ? removeMovie(movie) : handleCart(movie)
							}
							disabled={removeBtn ? false : toFindAlreadyAddedToCart()}
						>
							{removeBtn
								? "Remove"
								: toFindAlreadyAddedToCart()
								? "Added"
								: "Add to Cart"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
