import { Paper, Typography, Grid, Button, Stack } from "@mui/material";
import chrisPng from "../assets/pictures/chrispng.png";
import fileSaver from "file-saver";

const HomePage = () => {
	const styleImg = {
		width: "60%",
		height: "60%",
		marginLeft: "20%",
	};

	const stylePaperHomePage = {
		padding: "30px 50px",
		border: "2px solid #1e87d1",
		backgroundColor: "#FFF",
		color: "primary.light",
	};

	const saveFile = () => {
		fileSaver.saveAs(
			process.env.PUBLIC_URL + "./assets/CV_ChristopherPetitcolas_Alternance_DEVWEB.pdf",
			"CV _ Christopher Petitcolas_Alternance_DEVWEB	.pdf"
		);
	};
	return (
		<Grid
			container
			width={"90%"}
			minHeight={"100vh"}
			height={"auto"}
			display="flex"
			justifyContent="center"
			alignItems="center"
			margin="auto"
		>
			<Grid item xs={12} md={6}>
				<img src={chrisPng} alt="christopher" style={styleImg} />
			</Grid>
			<Grid item xs={12} md={6}>
				<Paper sx={stylePaperHomePage}>
					<Typography color={"primary"} variant="h3">
						Développeur Front-end <br />
						(Javascript / React)
					</Typography>

					<Typography color={"primary"} width="100%" variant={"h4"} mb={5}>
						Je suis un développeur Front-End spécialisé React. <br />
						En apprentissage de Node.js.
					</Typography>

					<Stack direction="row" spacing={3}>
						<Button color={"primary"} variant={"contained"} href="/portfolio">
							Mon Portfolio
						</Button>
						<Button color={"primary"} variant={"outlined"} onClick={saveFile}>
							Télécharger mon CV
						</Button>
					</Stack>
				</Paper>
			</Grid>
			{window.innerWidth > 600 && (
				<Typography
					color="primary"
					sx={{ width: "100%", position: "absolute", bottom: "1%", textAlign: "center" }}
					variant="h5"
				>
					Cette page web est conçu avec React et MUI Component
				</Typography>
			)}
		</Grid>
	);
};

export default HomePage;
