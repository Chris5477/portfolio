import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { theme } from "../utils/theme";

const CardProject = ({ title, description, picture, link }) => {
	const styleCard = {
		width: "380px",
		margin: 3,
		minHeight: "400px",
		position: "relative",
		borderRadius: "8px",
		backgroundColor: "primary.dark",
		boxShadow: theme.shadows[22],
	};

	const styleCardMedia = {
		objectFit: "contain",
		height: "100",
		backgroundColor: "#FFF",
	};

	return (
		<Card sx={styleCard}>
			<CardMedia sx={styleCardMedia} component="img" image={picture} alt="project" />
			<Divider />
			<CardContent>
				<Typography pl={2} sx={{ backgroundColor: "primary.light", color: "primary.dark" }} gutterBottom variant="h3">
					{title}
				</Typography>
				<Typography color="primary.light">{description}</Typography>
				<CardActions>
					<Button color='secondary' variant="outlined" href={link}>Voir sur Github</Button>
					<Button color='secondary' variant="outlined"	 href={`#${title}`}>En savoir plus</Button>
				</CardActions>
				<Divider />
			</CardContent>
		</Card>
	);
};
export default CardProject;
