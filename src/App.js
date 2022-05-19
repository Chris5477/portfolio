import HomePage from "./page/HomePage";
import PortfolioPage from "./page/PortfolioPage";
import AboutPage from "./page/AboutPage";
import ErrorPage from "./page/ErrorPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import "./app.css";

function App() {

	const urlLocal = {
		home : "portfolio/",
		portfolio : "portfolio/myportfolio",
		about : "portfolio/about"
	}

	const urlDistant = {
		home : "https://chris5477.github.io/portfolio/",
		portfolio : "https://chris5477.github.io/portfolio/myportfolio",
		about : "https://chris5477.github.io/portfolio/about"
	}



	const isLocalDev = window.location.host == "localhost:3000" ? urlLocal : urlDistant

	console.log(isLocalDev)
	return (
		<div className="App">
			<BrowserRouter >
				<Routes>
					<Route exact path={isLocalDev.home} element={<Layout page={<HomePage />} />} />
					<Route path={isLocalDev.portfolio}element={<Layout page={<PortfolioPage />} />} />
					<Route path={isLocalDev.about} element={<Layout page={<AboutPage />} />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
