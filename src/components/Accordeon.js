import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Accordeon = ({ title, description }) => {
	const styleAccordeon = {
		backgroundColor: "#FFF",
		color: "primary.main",
		border: "1px solid primary",
	};

	const styleContentAccordeon = {
		backgroundColor: "background.paper",
		color: " primary",
	};

	return (
		<Accordion sx={styleAccordeon}>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon color="primary" />}
				aria-controls="panel1a-content"
				id="panel1a-header"
			>
				<Typography>{title}</Typography>
			</AccordionSummary>

			<AccordionDetails sx={styleAccordeon}>
				<Typography>
				{description}
				</Typography>
			</AccordionDetails>
		</Accordion>
	);
};
export default Accordeon;
