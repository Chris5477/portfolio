import { AppBar, Avatar, Box, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Chris from "../assets/pictures/chris.jpg";

const TopNavigation = () => {
	const pages = [
		{ id: 1, path: "/", link: "Home" },
		{ id: 2, path: "/portfolio", link: "Portfolio" },
		{ id: 3, path: "/about", link: "About" },
	];

	return (
		<AppBar>
			<Container>
				<Avatar alt="Christopher Petitcolas" src={Chris} sx={{ width: 56, height: 56 }} />
				<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
					{pages.map(({ id, path, link }) => (
						<Link key={id} to={path}>
							{link}
						</Link>
					))}
				</Box>
			</Container>
		</AppBar>
	);
};
export default TopNavigation;
