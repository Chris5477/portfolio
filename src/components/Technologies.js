import { Grid } from "@mui/material";

const styleIcon = {
	width: "40px",
	height: "40px",
	objectFit: "cover",
};

const Technologies = ({ icon }) => {
	return (
		<Grid item mobile={3}>
			<img style={styleIcon} src={icon} alt="technologie" />
		</Grid>
	);
};
export default Technologies;
