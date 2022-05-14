import HomePage from "./page/HomePage";
import PortfolioPage from "./page/PortfolioPage";
import AboutPage from "./page/AboutPage";
import ErrorPage from "./page/ErrorPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Layout />
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route path="/portfolio" element={<PortfolioPage />} />
					<Route path="/portfolio/project/:title" element={<PortfolioPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
