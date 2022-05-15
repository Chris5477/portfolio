import { AppBar, Avatar, Box, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";
import chris from "../assets/pictures/chrispng.png";
import { theme } from "../utils/theme";

const TopNavigation = () => {
	const pages = [
		{ id: 1, path: "portfolio/", link: "Home" },
		{ id: 2, path: "portfolio/myportfolio", link: "Portfolio" },
		{ id: 3, path: "/about", link: "About" },
	];

	const styleAppBar = {
		width: "100%",
		height: "70px",
		backgroundColor: "primary.dark",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		fontSize: "1.6em",
		"& :visited": {
			color: "primary.main",
		},
		"& :hover": {
			color: "primary.light",
			transition : "0.4s"
		},
	};

	return (
		<AppBar sx={styleAppBar}>
			<Avatar alt="Christopher Petitcolas" src={chris} sx={{ width: 50, height: 50, ml: "25px" }} />
			<Box sx={{ width: "30%", display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
				{pages.map(({ id, path, link }) => (
					<Link key={id} to={path}>
						{link}
					</Link>
				))}
			</Box>
		</AppBar>
	);
};
export default TopNavigation;
