import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { theme } from "../utils/theme";
import { Divider } from "@mui/material";
import { margin } from "@mui/system";

const CardProject = ({ title, description, picture, link, more }) => {
	return (
		<Card
			sx={{
				margin: 3,
				width : "380px",
				minHeight: "400px",
				position: "relative",
				borderRadius: "8px",
				cursor: "pointer",
				backgroundColor: "primary.dark",
				boxShadow: theme.shadows[22],
			}}
		>
			<CardMedia
				component="img"
				image={picture}
				alt="project"
				sx={{ objectFit: "contain", height: 100, backgroundColor: "#FFF" }}
			/>
			<Divider />
			<CardContent sx={{ backgroundColor: "primary.dark" }}>
				<Typography
					gutterBottom
					variant="h5"
					component="div"
					pl={2}
					sx={{ backgroundColor: "secondary.light" }}
					color="primary.dark"
					fontWeight={600}
				>
					{title}
				</Typography>
				<Typography variant="h6" color="secondary.light">
					{description}
				</Typography>
				<CardActions sx={{ position: "absolute", bottom: 10 }}>
					<Button color={"secondary"} variant="outlined" size="small" href={link}>
						Voir sur Github
					</Button>
					<Button color={"secondary"} variant="outlined" size="small" href={`#${title}`}>
						En savoir plus
					</Button>
				</CardActions>
				<Divider />
			</CardContent>
		</Card>
	);
};
export default CardProject;
