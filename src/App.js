import HomePage from "./page/HomePage";
import PortfolioPage from "./page/PortfolioPage";
import AboutPage from "./page/AboutPage";
import ErrorPage from "./page/ErrorPage";
import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import "./app.css";

function App() {

	return (
		<div className="App">
			<BrowserRouter >
				<Routes>
					<Route exact path={"portfolio/"} element={<Layout page={<HomePage />} />} />
					<Route path={"portfolio/myportfolio"}element={<Layout page={<PortfolioPage />} />} />
					<Route path={"portfolio/about"} element={<Layout page={<AboutPage />} />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</HashRouter>
		</div>
	);
}

export default App;
