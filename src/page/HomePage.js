import { Paper, Typography, Grid, Button, Stack } from "@mui/material";
import chrisPng from "../assets/pictures/chrispng.png";
import fileSaver from "file-saver";

const styleHomeGrid = {
	width: "100%",
	height: "auto",
	justifyContent: "space-around",
	alignItems: "center",
	margin: "100px 0",
};

const btns = window.innerWidth > 498 ? ({size : "large", textOne : "Mon portfolio", textTwo : "Télécharger mon Cv"}) : ({size : "small" ,textOne : "Portfolio", textTwo : "Mon Cv"})

const HomePage = () => {
	const saveFile = () => {
		fileSaver.saveAs(
			process.env.PUBLIC_URL + "./assets/CV_ChristopherPetitcolas_Alternance_DEVWEB.pdf",
			"CV _ Christopher Petitcolas_Alternance_DEVWEB	.pdf"
		);
	};
	return (
		<Grid container sx={styleHomeGrid}>
			<Grid item xs={12} md={5}>
				<img className="picture-home" src={chrisPng} alt="christopher" />
			</Grid>
			<Grid item xs={12} md={7} mt={6}>
				<Paper sx={{border : "2px solid #1e87d1" }}>
					<Typography variant="h1">
						Développeur Front-end <br />
						(Javascript / React)
					</Typography>

					<Typography variant={"h2"} mt={3} mb={5}>
						Je suis un développeur Front-End spécialisé React. <br />
						En apprentissage de Node.js.
					</Typography>

					<Stack direction="row" spacing={2}>
						<Button size={btns.size} variant="contained" color="primary" href="/myportfolio">{btns.textOne}</Button>
						<Button size={btns.size} variant="outlined" color="primary" onClick={saveFile}>{btns.textTwo}</Button>
					</Stack>
				</Paper>
			</Grid>

			<Typography
				
				sx={{ width: "100%", position: "absolute", bottom: "1%", textAlign: "center" }}
				variant="h4"
			>
				Cette page web est conçu avec React et MUI Component
			</Typography>
		</Grid>
	);
};

export default HomePage;
