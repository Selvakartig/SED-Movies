import React, { useContext, useEffect } from "react";
import MovieItem from "./MovieItem";
import MovieContext from "./../movieContext";

export default function MovieContainer() {
	const {
		movies,
		getMovies,
		cart,
		setCart,
		selectedGenre,
		genres,
		movieLang,
		searchQuery,
	} = useContext(MovieContext);

	useEffect(() => {
		getMovies("popular");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleCart = (movie) => {
		setCart([...cart, movie]);
	};

	const LangMovies = (mov) => {
		return mov.filter((m) => m.original_language === movieLang);
	};

	const genreMovies = () => {
		let checkingGenre = genres.find((genre) => genre.id === selectedGenre);

		if (checkingGenre) {
			const newMovies = movies.filter((m) =>
				// eslint-disable-next-line
				m.genre_ids.some((gId) => {
					if (gId === checkingGenre.id) {
						return m;
					}
				})
			);
			return LangMovies(newMovies);
		} else if (searchQuery) {
			const newMovies = movies.filter((m) =>
				m.original_title.toLowerCase().includes(searchQuery.toLowerCase())
			);
			return LangMovies(newMovies);
		}

		return LangMovies(movies);
	};

	const gMovie = genreMovies();

	return (
		<div>
			<div className="mb-3">
				<button
					className="btn btn-primary"
					onClick={() => getMovies("top_rated")}
				>
					Top Rated
				</button>
				<button
					className="btn btn-primary mx-3"
					onClick={() => getMovies("popular")}
				>
					Popular
				</button>
				<button
					className="btn btn-primary"
					onClick={() => getMovies("upcoming")}
				>
					Upcoming
				</button>
			</div>
			<div className="row">
				{gMovie.length === 0 && (
					<div className="className= text-center my-5">
						<h3 className="mb-4">There are no movies!</h3>
						<img
							src="../images/sad-face.png"
							alt="sad face"
							height="150px"
							width="150px"
						/>
					</div>
				)}
				{gMovie.map((movie) => {
					let picURL = "https://image.tmdb.org/t/p/w500";
					movie = {
						id: movie.id,
						name: movie.original_title,
						pic: picURL + movie.backdrop_path,
						rate: movie.vote_average,
					};
					return (
						<MovieItem key={movie.id} movie={movie} handleCart={handleCart} />
					);
				})}
			</div>
		</div>
	);
}
