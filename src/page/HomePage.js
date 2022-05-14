import { Box, Paper, Typography } from "@mui/material";
import chrisPng from "../assets/pictures/chrispng.png"

const HomePage = () => {
	return (
		<Box>
			<Box>
				<img src={chrisPng} alt="christopher" />
			</Box>
			<Paper></Paper>
			<Paper>
				<Typography component={"h2"}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
				<Typography component={"h3"}>Lorem ipsum dolor sit.</Typography>
				<Typography component={"p"}>Lorem ipsum dolor sit amet consectetur.</Typography>
			</Paper>
		</Box>
	);
};

export default HomePage;
