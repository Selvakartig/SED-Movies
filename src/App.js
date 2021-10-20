import React from "react";
import { Route, Switch, Redirect } from "react-router";
import { MovieProvider } from "./movieContext";
import MovieScroll from "./components/MovieScroll";
import Nav from "./components/Nav";
import MovieContainer from "./components/MovieContainer";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import About from "./components/About";

function App() {
	return (
		<MovieProvider>
			<Nav />
			<MovieScroll />
			<div className="container mt-5">
				<Switch>
					<Route path="/cart" component={Cart} />
					<Route path="/movies/:id" component={MovieContainer} />
					<Route path="/movies" component={MovieContainer} />
					<Route path="/about" component={About} />
					<Route path="/not-found" component={NotFound} />
					<Redirect path="/" exact to="/movies" />
					<Redirect to="/not-found" />
				</Switch>
			</div>
			<Footer />
		</MovieProvider>
	);
}

export default App;
