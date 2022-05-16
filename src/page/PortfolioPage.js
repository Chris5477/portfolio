import { Box, Grid, Typography } from "@mui/material";
import CardProject from "../components/CardProject";
import Project from "../components/Project";
import { projects } from "../utils/listProject";

const PortFolioPage = () => {
	return (
		<Box>
			<Grid id="top" container width={"100%"} height="auto" spacing={2}>
				<Grid mt={10} ml={5} item xs={12}>
					<Typography variant="h3" color={"primary"} fontWeight={500}>
						Mon portfolio
					</Typography>
				</Grid>
				{projects.map(({ id, title, description, illustrations, github }) => (
					<Grid key={id} item xs={12} md={3}>
						<CardProject picture={illustrations[0]} title={title} description={description} link={github} />
					</Grid>
				))}
			</Grid>
			<Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
				{projects.map(({ id, title, description, illustrations, article, skillWorked, github }) => (
					<Project
						key={id}
						id={id}
						title={title}
						description={description}
						illustrations={illustrations}
						article={article}
						skillWorked={skillWorked}
						github={github}
					/>
				))}
			</Box>
		</Box>
	);
};
export default PortFolioPage;
