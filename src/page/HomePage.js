import { Paper, Typography, Grid, Button, Stack } from "@mui/material";
import chrisPng from "../assets/pictures/chrispng.png";
import fileSaver from "file-saver";

const HomePage = () => {
	const styleImg = {
		position: "absolute",
		top: "50%",
		left: "11%",
		transform: "translateY(-50%)",
		width: "400px",
		height: "400px",
	};

	const stylePaperHomePage = {
		pt: 8,
		pb: 5,
		pl: 10,
		pr: 10,
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
			height={"100vh"}
			direction={"column"}
			justifyContent={"center"}
			alignItems={"flex-end"}
		>
			<img src={chrisPng} alt="christopher" style={styleImg} />

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
			{/* <Typography variant="h6">Cette page web est conçu avec React et MUI Component</Typography>	 */}
		</Grid>
	);
};

export default HomePage;
