import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Accordeon = ({ title, description, expanded}) => {

	return (
		<Accordion defaultExpanded={expanded} >
			<AccordionSummary
				expandIcon={<ExpandMoreIcon sx={{color : "#FFF"}} />}
				aria-controls="panel1a-content"
				id="panel1a-header"
			>
				<Typography variant="h4" fontSize={24} sx={{color : "#FFF"}}>
					{title}
				</Typography>
			</AccordionSummary>

			<AccordionDetails >
				<Typography fontSize={18}  >{description}</Typography>
			</AccordionDetails>
		</Accordion>
	);
};
export default Accordeon;
