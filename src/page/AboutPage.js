import { Box, Paper, Typography, Stack } from "@mui/material";
import Accordeon from "../components/Accordeon";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AttachmentIcon from "@mui/icons-material/Attachment";
import LanguageIcon from "@mui/icons-material/Language";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SocialLink from "../components/SocialLink";

const AboutPage = () => {
	return (
		<Box>
			<Paper>
				<Typography variant="h2">Lorem, ipsum.</Typography>
				<Typography paragraph>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore ut nesciunt culpa, laborum
					labore repellat debitis alias. Facere temporibus natus a qui quidem facilis voluptatum inventore excepturi
					enim illo. Repellat velit a sit quo laboriosam. Ea molestias accusamus ipsa sequi. Voluptas alias in sequi
					libero hic non accusamus vel, facilis, dolorem tempora architecto recusandae nostrum. A iure in sapiente!
					Inventore corporis sit cumque consectetur fugit autem assumenda excepturi earum perferendis porro quae dolorum
					expedita at obcaecati magnam, eius, amet aut minima non nulla est. Ex aspernatur autem sit rerum! Quod nihil
					et atque omnis, similique alias voluptates repellat explicabo. Adipisci, quasi. Quidem ratione eum, explicabo
					culpa laudantium officiis in excepturi laboriosam necessitatibus, rem delectus nostrum, fugit blanditiis
					deleniti ipsum.
				</Typography>
				<Accordeon />
			</Paper>
			<Paper>
				<Typography variant="h2">Lorem, ipsum.</Typography>
				<SocialLink
					icon={<LinkedInIcon />}
					content="Linkedin"
					link="https://www.linkedin.com/in/christopher-petitcolas/"
				/>
				<SocialLink icon={<GitHubIcon />} content="Github" link="https://github.com/Chris5477" />
				<SocialLink icon={<ContactMailIcon />} content="Contactez-moi" />
				<SocialLink icon={<LanguageIcon />} content="WeLovesDevs" link="https://christopherpetitcola.welovedevs.com" />
				<SocialLink icon={<AttachmentIcon />} content="Mon C-V" link="https://chris5477.github.io/CV/" />
			</Paper>
		</Box>
	);
};
export default AboutPage;
