import { Paper, Typography, Grid } from "@mui/material";
import chrisPng from "../assets/pictures/chrispng.png";

const styleImg = {
	position: "absolute",
	top: "50%",
	left: "11%",
	transform: "translateY(-50%)",
	width : "400px",
	height : "400px"
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

			<Paper sx={{padding: "30px 10px"}}>
				<Typography color={"primary"} variant="h4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</Typography>

				<Typography color={"primary"} width="100%" variant={"h3"}>
					Lorem ipsum dolor sit.
				</Typography>

				<Typography color={"primary"} variant={"p"}>
					Lorem ipsum dolor sit amet consectetur.
				</Typography>
			</Paper>
		</Grid>
		
	);
};

export default HomePage;
