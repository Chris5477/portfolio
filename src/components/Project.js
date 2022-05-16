import { Typography, Paper, Button, List, ListItem, ListItemText, Pagination, Stack } from "@mui/material";
import { useState } from "react";

const Project = ({ id, title, illustrations, article, skillWorked, github }) => {
	const [index, setIndex] = useState(1);
	return (
		<Paper
			id={title}
			sx={{ width: "90%", height: "auto", backgroundColor: "#FFF", padding: "20px", margin: "20px auto" }}
		>
			<Stack direction="row" justifyContent={"space-between"} alignItems="center" mb={5}>
				<Typography variant="h3" color="primary">
					Projet n ° {id} {title}
				</Typography>
				<img width={150} src={illustrations[0]} alt="project" />
			</Stack>
			<Stack alignItems="center" sx={{ position: "relative" }}>
				<img width={"80%"} height={500} style={{ objectFit: "contain  " }} src={illustrations[index]} alt="project" />

				<Pagination
					size="large"
					sx={{
						display: "inline-flex",
						position: "absolute",
						left: "50%",
						bottom: "2%",
						transform: "translateX(-50%)",
						backgroundColor: "secondary.main",
						borderRadius: "8px",
					}}
					count={illustrations.length - 1}
					onChange={(e, page) => setIndex(page)}
					color="primary"
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
				<Typography paragraph color="primary.main" fontWeight={"bolder"} fontSize={18}>
					{article}
				</Typography>
			</Stack>
			<Stack direction="row" spacing={3} size="large">
				<Button color="primary" variant="contained" size="small" href={github}>
					Voir sur Github
				</Button>
				<Button color="primary" variant="contained" size="small" href={`#top`}>
					Revenir en haut
				</Button>
			</Stack>
		</Paper>
	);
};
export default Project;
