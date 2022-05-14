import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardProject = ({title, description, picture, link, more}) => {
return(
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      image={picture}
      alt="project"
      sx={{objectFit : "contain", height: 140}}
      
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
       {description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" href={link}>Voir sur Github</Button>
      <Button size="small" href={more}>En savoir plus</Button>
    </CardActions>
  </Card>
)
}
export default CardProject