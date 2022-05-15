import { Box, Typography, Grid } from "@mui/material";
import chrisPng from "../assets/pictures/chrispng.png";

const styleImg = {
	position: "absolute",
	top: "50%",
	left: "11%",
	transform: "translateY(-50%)",
};

const HomePage = () => {
	return (
		
		<Grid
			container
			width={"90%"}
			height={"100vh"}
			direction={"column"}
			justifyContent={"center"}
			alignItems={"flex-end"}
		>
			<img src={chrisPng} alt="christopher" style={styleImg} />

			<Box>
				<Typography color={"secondary.light"} variant="h4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</Typography>

				<Typography color={"secondary"} width="100%" variant={"h3"}>
					Lorem ipsum dolor sit.
				</Typography>

				<Typography color={"primary.light"} variant={"p"}>
					Lorem ipsum dolor sit amet consectetur.
				</Typography>
			</Box>
		</Grid>
		
	);
};

export default HomePage;
