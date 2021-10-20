import React, { createContext, useState } from "react";
import axios from "axios";

const MovieContext = createContext();

export default MovieContext;

export const MovieProvider = ({ children }) => {
	const [movies, setMovies] = useState([]);
	const [genres, setGenres] = useState([]);
	const [cart, setCart] = useState([]);
	const [selectedGenre, setSelectedGenre] = useState(null);
	const [movieLang, setMovieLang] = useState("en");
	const [searchQuery, setSearchQuery] = useState("");

	const getMovies = async (category) => {
		let responce = await axios(
			`https://api.themoviedb.org/3/movie/${category}/?api_key=86c67965185fdbb6fa7f4f4bb733bee4`
		);

		setMovies(responce.data.results);
	};

	const getGenres = async () => {
		let responce = await axios(
			"https://api.themoviedb.org/3/genre/movie/list?api_key=86c67965185fdbb6fa7f4f4bb733bee4&language=en-US"
		);

		setGenres(responce.data.genres);
	};

	const context = {
		movies,
		setMovies,
		genres,
		setGenres,
		cart,
		setCart,
		selectedGenre,
		setSelectedGenre,
		getMovies,
		getGenres,
		movieLang,
		setMovieLang,
		searchQuery,
		setSearchQuery,
	};

	return (
		<MovieContext.Provider value={context}>{children}</MovieContext.Provider>
	);
};
