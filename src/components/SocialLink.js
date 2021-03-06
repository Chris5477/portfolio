import { Button } from "@mui/material";

const SocialLink = ({ icon, title, url, handleClick }) => {
	const styleButton = {
		width: "80%",
		height: "40px",
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
	};

	return (
		<Button sx={styleButton} variant="contained" href={url} onClick={handleClick && handleClick}>
			{icon}
			{title}
		</Button>
	);
};
export default SocialLink;
