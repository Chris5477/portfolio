import { Box, Paper, Typography, Stack } from "@mui/material";
import Accordeon from "../components/Accordeon";
import SocialLink from "../components/SocialLink";
import { listLinks } from "../utils/listsLinks";

import { presentation} from "../utils/presentation"

const AboutPage = () => {
	return (
		<Box mt={10} sx={{ display: "flex", justifyContent: "space-around" }}>
			<Paper sx={{ width: "70%", height: "auto" }}>
				<Typography variant="h2">Lorem, ipsum.</Typography>
				<Typography paragraph>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore ut nesciunt culpa, laborum
					labore repellat debitis alias. Facere temporibus natus a qui quidem facilis voluptatum inventore excepturi
					enim illo. Repellat velit a sit quo laboriosam. Ea molestias accusamus ipsa sequi. Voluptas alias in sequi
					libero
				</Typography>
				{presentation.map(({ id, title, description }) => (
					<Accordeon key={id} title={title} description={description} />
				))}
			</Paper>
			<Paper sx={{ width: "15%", height: "100vh" }}>
				<Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
					Mes réseaux sociaux
				</Typography>
				<Stack spacing={2}>
					{listLinks.map(({id, title, icon, url}) =>(
						<SocialLink key={id} title={title} icon={icon} url={url} />
					))}
				</Stack>
			</Paper>
		</Box>
	);
};
export default AboutPage;
