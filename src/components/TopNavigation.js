import { AppBar, Avatar, Box, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import chris from "../assets/pictures/chrispng.png";

const TopNavigation = () => {
	const pages = [
		{ id: 1, path: "/", link: "Home" },
		{ id: 2, path: "/myportfolio", link: "Portfolio" },
		{ id: 3, path: "/about", link: "About" },
	];

	return (
		<AppBar>
			<Stack direction="row" alignItems="center">
				<Avatar alt="Christopher Petitcolas" src={chris} sx={{mr : 1}} />
				<Typography color={"white"} variant="h5">Petitcolas Christopher</Typography>
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
