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
				minHeight: "400px",
				position: "relative",
				borderRadius: "8px",
				cursor: "pointer",
				backgroundColor: theme.palette.primary.light,
			}}

      
		>
			<CardMedia
				component="img"
				image={picture}
				alt="project"
				sx={{ objectFit: "contain", height: 140, backgroundColor: theme.palette.background.default }}
			/>
			<Divider />
			<CardContent sx={{ backgroundColor: theme.palette.primary.light }}>
				<Typography
					gutterBottom
					variant="h5"
					component="div"
					sx={{ backgroundColor: "secondary.light" }}
					fontWeight={600}
					color={"secondary"}
				>
					{title}
				</Typography>
				<Typography variant="h6" color="background.default">
					{description}
				</Typography>
				<CardActions sx={{ position: "absolute", bottom: 10 }}>
					<Button color={"secondary"} variant="contained" size="small" href={link}>
						Voir sur Github
					</Button>
					<Button color={"secondary"} variant="contained" size="small" href={more}>
						En savoir plus
					</Button>
				</CardActions>
				<Divider />
			</CardContent>
		</Card>
	);
};
export default CardProject;
