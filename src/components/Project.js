import { Typography, Paper, Button, List, ListItem, ListItemText, Pagination, Stack } from "@mui/material";
import { useState } from "react";

const stylePaperPortfolio = {
	backgroundColor: "#FFF",
	width: "90%",
	padding: "10px",
	margin: "50px auto",
};

const styleIllustration = {
	width: "80%",
	objectFit: "contain",
	position: "relative",
};

const stylePagination = {
	width: window.innerWidth < 498 ? "70%" : "auto",
	position: "absolute",
	bottom: "2%",
	left: "50%",
	transform: "translateX(-50%)",
	backgroundColor: "secondary.main",
	borderRadius: "8px",
	opacity : "0.7"
};

const Project = ({ id, title, illustrations, article, skillWorked, github }) => {
	const [index, setIndex] = useState(1);

	const media = illustrations[index].match(".webm") ? (
		<video sx={styleIllustration} controls>
			<source src={illustrations[index]} />
		</video>
	) : (
		<img sx={styleIllustration} src={illustrations[index]} alt="project" />
	);

	return (
		<Paper id={title} sx={stylePaperPortfolio}>
			<Stack direction="row" justifyContent="space-between" mb={2}>
				<Typography variant="h5">
					Projet n°{id} {title}
				</Typography>
				<img width={100} src={illustrations[0]} alt="project" />
			</Stack>
			<Stack sx={{ position: "relative" }}>
				{media}
				<Pagination
					color={"primary"}
					sx={{ ...stylePagination }}
					count={illustrations.length - 1}
					onChange={(e, page) => setIndex(page)}
				/>
			</Stack>
			<Stack>
				<List>
					<Typography variant="h6">Technologies utilisées :</Typography>
					<ListItem>
						{skillWorked.map((techno, index) => (
							<ListItemText key={`index ${index}`}>{techno}</ListItemText>
						))}
					</ListItem>
				</List>
				<Typography paragraph textAlign="justify" fontSize={18}>
					{article}
				</Typography>
			</Stack>
			<Stack direction="row" spacing={2}>
				<Button variant="contained" color="primary" href={github}>
					Voir Github
				</Button>
				<Button variant="contained" color="primary" href={`#top`}>
					Haut de page
				</Button>
			</Stack>
		</Paper>
	);
};
export default Project;
