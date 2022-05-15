import { Grid, Typography } from "@mui/material";
import CardProject from "../components/CardProject";
import { projects } from "../utils/listProject";

const ProjectsPage = () => {
	return (
		<Grid container width={"100%"} minHeight={"100vh"} height="auto" spacing={2}>
			<Grid mt={10} ml={5} item xs={12}>
				<Typography variant="h1" color={"secondary.light"} fontWeight={500} >Mon portfolio</Typography>
				<Typography paragraph fontSize={25} color={"background.default"}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda optio rem quia omnis, dolorum, reiciendis
					ad expedita exercitationem laudantium, dignissimos vero laborum autem! Ducimus consequatur omnis a ex
					doloribus vero.
				</Typography>
			</Grid>	
			
			{projects.map(({ id, name, description, illustrations, github }) => (
				<Grid item xs={12} md={3}>
				<CardProject
					key={id}
					picture={illustrations[0]}
					title={name}
					description={description}
					link={github}
					more={`/portfolio/project/${name}`}
				/>
				</Grid>
			))}
		</Grid>
	);
};
export default ProjectsPage;
