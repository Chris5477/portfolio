import { Paper, Typography, Stack, Divider, Grid } from "@mui/material";
import Accordeon from "../components/Accordeon";
import SocialLink from "../components/SocialLink";
import Technologies from "../components/Technologies";
import { listLinks } from "../utils/listsLinks";
import { presentation } from "../utils/presentation";
import { skills } from "../utils/stacks";
import { knowledge } from "../utils/stacks";

const styleGridAboutPage = {
	width: "100%",
	minHeight: "100vh",
	marginLeft : "5px"

};

const styleAccordeon = {
	backgroundColor : "#FFF",
	height: "auto",
	marginTop: "110px",
	marginBottom :"20px",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	padding : "25px 5px"
};

const styleAside = {
	backgroundColor: "#FFF",
	width: "300px",
	height: "auto",
	position: "fixed",
	right: "2%",
	top: "11%",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
};

const styleGridTechno = {
	backgroundColor: "#ebeed3",
	border: "2px solid #1e87d1",
	paddingBottom: "20px",
	borderRadius: "5px",
	margin : "30px auto",
	width : "80%"
};

const styleAsideXS = {
	backgroundColor: "#FFF",
	width: "90%",
	height: "auto",
	paddgin: "30px 0",
	margin : "auto"
};

const AboutPage = () => {
	return (
		<Grid container sx={styleGridAboutPage}>
			<Grid item mobile={12} tablette={8} >
				<Paper sx={window.innerWidth > 498 ? styleAccordeon : { ...styleAccordeon, width: "95%" }}>
					<Typography color={"primary"} variant="h1" width={"95%"} pb={2}>
						À propos de moi
					</Typography>

					{presentation.map(({ id, title, description, expanded }) => (
						<Accordeon key={id} expanded={expanded} title={title} description={description} />
					))}
				</Paper>
			</Grid>
			<Grid item xs={12} >
				<Paper sx={window.innerWidth > 998 ? styleAside : styleAsideXS}>
					<Typography variant="h3" pt={2} pb={2}>
						Mes réseaux sociaux
					</Typography>
					<Stack alignItems={"center"} spacing={2}>
						{listLinks.map(({ id, title, icon, url, handleClick }) => (
							<SocialLink  key={id} title={title} icon={icon} url={url} handleClick={handleClick} />
						))}
					</Stack>

					<Grid container spacing={2} sx={styleGridTechno}>
						<Grid item xs={12}>
							<Typography variant="h5" component={"div"}>
								Mes compétences
							</Typography>
						</Grid>
						<Divider />
						{skills.map(({ id, icon }) => (
							<Technologies key={id} icon={icon} />
						))}
					</Grid>

					<Grid container spacing={2} sx={styleGridTechno}>
						<Grid item xs={12}>
							<Typography variant="h5">Mes connaissances</Typography>
						</Grid>
						<Divider />
						{knowledge.map(({ id, icon }) => (
							<Technologies key={id} icon={icon} />
						))}
					</Grid>
				</Paper>
			</Grid>
		</Grid>
	);
};
export default AboutPage;