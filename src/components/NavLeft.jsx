import React, { useEffect, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import MovieContext from "./../movieContext";

export default function NavLeft() {
	const { setSelectedGenre, genres, getGenres, searchQuery, setSearchQuery } =
		useContext(MovieContext);

	useEffect(() => {
		getGenres();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleGenreSelect = (genre) => {
		setSelectedGenre(genre.id);
		setSearchQuery("");
	};

	const handleHome = () => {
		setSelectedGenre(null);
	};

	const handleSearch = (query) => {
		setSearchQuery(query);
		setSelectedGenre(null);
	};

	return (
		<ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
			<li className="nav-item">
				<NavLink className="nav-link" to="/movies" onClick={handleHome}>
					Homes
				</NavLink>
			</li>
			<li className="nav-item">
				<NavLink className="nav-link" to="/about">
					About
				</NavLink>
			</li>
			<li className="dropdown">
				<Link className="nav-link" to="/movies">
					Genre
				</Link>
				<ul className="dropdown-content">
					{genres.map((genre) => (
						<li key={genre.id}>
							<Link
								className="dropdown-items"
								onClick={() => handleGenreSelect(genre)}
								to="/movies"
							>
								{genre.name}
							</Link>
						</li>
					))}
				</ul>
			</li>
			<input
				type="text"
				name="query"
				className="form-control my-0 mx-3"
				placeholder="Search..."
				value={searchQuery}
				onChange={(e) => handleSearch(e.currentTarget.value)}
				autoComplete="off"
			/>
		</ul>
	);
}
