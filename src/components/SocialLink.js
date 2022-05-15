import { Button } from "@mui/material";

const SocialLink = ({ icon, title, url }) => {
	const styleLinkButton = {
		width: "100%",
		height: "60px",
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
	};

	return (
		<Button sx={styleLinkButton} variant="contained" color={"primary"} href={url}>
			{icon}
			{title}
		</Button>
	);
};
export default SocialLink;
