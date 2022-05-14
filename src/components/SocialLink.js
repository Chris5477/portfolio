import { Button, Link } from "@mui/material";
const SocialLink = ({icon, content, link }) => {
  
	return( 
        <Button variant="conatined" href={link}>
            {icon}
            {content}
        </Button>
    )
   
};
export default SocialLink;
