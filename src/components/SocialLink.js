import { Button } from "@mui/material";

const SocialLink = ({ icon, title, url, handleClick }) => {
	const styleLinkButton = {
		width: "100%",
		height: "40px",
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
	};

	return (
		<Button sx={styleLinkButton} variant="contained" color={"primary"} href={url} onClick={handleClick && handleClick}>
			{icon}
			{title}
		</Button>
	);
};
export default SocialLink;
