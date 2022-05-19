import { Box, Grid, Typography } from "@mui/material";
import CardProject from "../components/CardProject";
import Project from "../components/Project";
import { projects } from "../utils/listProject";

const PortFolioPage = () => {
	return (
		<Box>
			<Grid id="top" container spacing={2}>
				<Grid item mt={10} ml={5} mobile={12}>
					<Typography variant="h1">Mon portfolio</Typography>
				</Grid>
				{projects.map(({ id, title, description, illustrations, github }) => (
					<Grid key={id} item mobile={12} tablette={3}>
						<CardProject picture={illustrations[0]} title={title} description={description} link={github} />
					</Grid>
				))}
			</Grid>
			<Box>
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
