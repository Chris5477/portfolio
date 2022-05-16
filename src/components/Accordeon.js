import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Accordeon = ({ title, description }) => {
	const styleAccordeon = {
		backgroundColor: "#FFF",
		color: "primary.main",
		border: "1px solid #1e87d1",
	};

	const styleAccordeonSummary = {
		backgroundColor: "primary.main",
		color: "#FFF",
		
	};
	return (
		<Accordion sx={styleAccordeon}>
			<AccordionSummary
				sx={styleAccordeonSummary}
				expandIcon={<ExpandMoreIcon sx={{color : "#FFF"}} />}
				aria-controls="panel1a-content"
				id="panel1a-header"
			>
				<Typography fontWeight={1000} fontSize={20}>{title}</Typography>
			</AccordionSummary>

			<AccordionDetails sx={{...styleAccordeon, padding : "15px" }}>
				<Typography fontWeight={"bold"}>
				{description}
				</Typography>
			</AccordionDetails>
		</Accordion>
	);
};
export default Accordeon;
