import { AppBar, Avatar, Box, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import chris from "../assets/pictures/chrispng.png";

const TopNavigation = () => {
	const pages = [
		{ id: 1, path: "portfolio/", link: "Home" },
		{ id: 2, path: "portfolio/myportfolio", link: "Portfolio" },
		{ id: 3, path: "portfolio/about", link: "About" },
	];

	return (
		<AppBar>
			<Stack direction="row" alignItems="center">
				<Avatar alt="Christopher Petitcolas" src={chris} sx={{mr : 2}} />
				<Typography color={"white"} variant="h4">Petitcolas Christopher</Typography>
			</Stack>
			<Box mr={6}>
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
