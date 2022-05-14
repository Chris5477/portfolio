import { Paper, Typography } from "@mui/material";
import CardProject from "../components/CardProject";
import { projects } from "../utils/listProject";

const ProjectsPage = () => {
	return (
		<Paper>
			<Typography variant="h1">Mon portfolio</Typography>
			<Typography paragraph>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda optio rem quia omnis, dolorum, reiciendis ad
				expedita exercitationem laudantium, dignissimos vero laborum autem! Ducimus consequatur omnis a ex doloribus
				vero. Repudiandae delectus numquam sequi quia, qui fugiat impedit. Eum sapiente, laudantium cupiditate
				accusantium repellendus alias unde quia hic est assumenda eos, rerum, quam quaerat pariatur dolorum. Illo
				ducimus necessitatibus molestias!
			</Typography>
			Description project
			{projects.map(({ id, name, description, illustrations, github }) => (
				<CardProject key={id} picture={illustrations[0]} title={name} description={description} link={github} more={`/portfolio/project/${name}`} />
			))}
		</Paper>
	);
};
export default ProjectsPage;
