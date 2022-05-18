import {Box, Paper, Typography, Grid, Button, Stack } from "@mui/material";
import chrisPng from "../assets/pictures/chrispng.png";
import fileSaver from "file-saver";


const styleBoxHomePage = {backGroundColor : "#ebeed3", height: "100vh", display :"flex" , alignItems:"center"}
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
};

const btns =
	window.innerWidth > 498
		? { size: "large", textOne: "Mon portfolio", textTwo: "Télécharger mon Cv" }
		: { size: "small", textOne: "Portfolio", textTwo: "Mon Cv" };

const HomePage = () => {
	const saveFile = () => {
		fileSaver.saveAs(
			process.env.PUBLIC_URL + "./assets/CV_ChristopherPetitcolas_Alternance_DEVWEB.pdf",
			"CV _ Christopher Petitcolas_Alternance_DEVWEB	.pdf"
		);
	};
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
							<Button size={btns.size} variant="contained" color="primary" href="/myportfolio">
								{btns.textOne}
							</Button>
							<Button size={btns.size} variant="outlined" color="primary" onClick={saveFile}>
								{btns.textTwo}
							</Button>
						</Stack>
					</Paper>
				</Grid>

				<Typography sx={{ width: "100%", position: "absolute", bottom: "1%", textAlign: "center" }}>
					Cette page web est conçu avec React et MUI Component
				</Typography>
			</Grid>
		</Box>
	);
};

export default HomePage;
