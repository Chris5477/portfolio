import { Box, Paper, Typography, Grid, Button, Stack } from "@mui/material";
import chrisPng from "../assets/pictures/chrispng.png";
import { saveFile } from "../utils/downloadFile";

const styleBoxHomePage = { backGroundColor: "#f3f3f7", height: "100vh", display: "flex", alignItems: "center" };
const styleHomeGrid = {
	width: "100%",
	height: "auto",
	justifyContent: "space-around",
	alignItems: "center",
};

const stylePaperHomePage = {
	backgroundColor: "#FFF",
	padding: "25px 5px 20px 25px",
	border: "2px solid #1e87d1",
	borderRadius: "8px",
	width: "85%",
	margin: "auto",
};

const btns =
	window.innerWidth > 498
		? { size: "large", textOne: "Mon portfolio", textTwo: "Télécharger mon Cv" }
		: { size: "small", textOne: "Portfolio", textTwo: "Mon Cv" };

const HomePage = () => {
	return (
		<Box sx={styleBoxHomePage}>
			<Grid container sx={styleHomeGrid}>
				<Grid item mobile={12} tablette={3} mt={8}>
					<img className="picture-home" src={chrisPng} alt="christopher" />
				</Grid>
				<Grid item mobile={12} tablette={5} mt={6}>
					<Paper sx={stylePaperHomePage}>
						<Typography variant="h1">
							Développeur Front-end <br />
							(Javascript / React)
						</Typography>

						<Typography variant={"h3"} mt={3} mb={5}>
							Je suis un développeur Front-End spécialisé React. <br />
							En apprentissage de Node.js.
						</Typography>

						<Stack direction="row" spacing={2}>
							<Button size={btns.size} variant="contained" color="primary" href="/portfolio/myportfolio">
								{btns.textOne}
							</Button>
							<Button size={btns.size} variant="outlined" color="primary" onClick={saveFile}>
								{btns.textTwo}
							</Button>
						</Stack>
					</Paper>
				</Grid>
			</Grid>
		</Box>
	);
};

export default HomePage;
