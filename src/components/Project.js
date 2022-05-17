import { Typography, Paper, Button, List, ListItem, ListItemText, Pagination, Stack } from "@mui/material";
import { useState } from "react";

const Project = ({ id, title, illustrations, article, skillWorked, github }) => {
	const [index, setIndex] = useState(1);
	return (
		<Paper id={title}>
			<Stack>
				<Typography variant="h3">
					Projet n ° {id} {title}
				</Typography>
				<img width={150} src={illustrations[0]} alt="project" />
			</Stack>
			<Stack>
				<img width={"80%"} height={500} style={{ objectFit: "contain  " }} src={illustrations[index]} alt="project" />

				<Pagination size="large" count={illustrations.length - 1} onChange={(e, page) => setIndex(page)} />
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
				<Typography paragraph fontSize={18}>
					{article}
				</Typography>
			</Stack>
			<Stack>
				<Button href={github}>Voir sur Github</Button>
				<Button href={`#top`}>Revenir en haut</Button>
			</Stack>
		</Paper>
	);
};
export default Project;
