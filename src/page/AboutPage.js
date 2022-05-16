import { Box, Paper, Typography, Stack, Divider, Grid } from "@mui/material";
import Accordeon from "../components/Accordeon";
import SocialLink from "../components/SocialLink";
import Technologies from "../components/Technologies";
import { listLinks } from "../utils/listsLinks";
import { presentation } from "../utils/presentation";
import { skills } from "../utils/stacks";
import { knowledge } from "../utils/stacks";

const AboutPage = () => {
	const styleStack = {
		width: "20%",
		position: "fixed",
		right: "3%",
		top: "13%",
	};

	const stylePaper = {
		width: "100%",
		backgroundColor: "#FFF",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		borderRadius: "8px",
	};

	const styleGrid = {
		backgroundColor: "background.paper",
		border: "2px solid #1e87d1",
		paddingBottom: "20px",
		borderRadius: "8px",
		margin: "15px auto",
		width: "90%",
	};

	return (
		<Box pt={15} pl={3}>
			<Paper sx={{ width: "70%", height: "auto", p: 4, backgroundColor: "#FFF" }}>
				<Typography mb={2} color={"primary"} fontWeight={400} variant="h2">À propos de moi</Typography>
				
				{presentation.map(({ id, title, description }) => (
					<Accordeon key={id} title={title} description={description} />
				))}
			</Paper>
			<Stack spacing={2} sx={styleStack}>
				<Paper sx={stylePaper}>
					<Typography
						sx={{ mt: 2, mb: 2, pl: 2, placeSelf: "flex-start center", color: "primary.main" }}
						variant="h6"
						component="div"
					>
						Mes réseaux sociaux
					</Typography>
					<Stack width={"90%"} spacing={2}>
						{listLinks.map(({ id, title, icon, url, handleClick }) => (
							<SocialLink key={id} title={title} icon={icon} url={url} handleClick={handleClick} />
						))}
					</Stack>

					<Grid container spacing={3} sx={styleGrid}>
						<Grid item xs={12}>
							<Typography variant="h6" component="div">
								Mes stacks
							</Typography>
						</Grid>
						<Divider />
						{skills.map(({ id, icon }) => (
							<Technologies key={id} icon={icon} />
						))}
					</Grid>

					<Grid container width={"100%"} spacing={2} sx={styleGrid}>
						<Grid item xs={12}>
							<Typography variant="h6" component="div">
								Mes connaissances
							</Typography>
						</Grid>
						<Divider />
						{knowledge.map(({ id, icon }) => (
							<Technologies key={id} icon={icon} />
						))}
					</Grid>
				</Paper>
			</Stack>
		</Box>
	);
};
export default AboutPage;
