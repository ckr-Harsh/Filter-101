import React from 'react'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
    root: {
      maxWidth: 340,
    },
    media:{
      height:140,
      width:250,
    }
  });

function Cards(props) {
    const classes = useStyles();
    const imgs = props.img;
    return (
      <div className='card'>
        <div className={classes.root} >
            
    <Card >
        <CardActionArea>
        <CardMedia
          component='img'
          className={classes.media}
          image={imgs}
          title="Demo Img"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
           {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {props.brand}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color="secondary" >
          Size :  {props.size}
        </Button>
    
        <Button color="primary" >
          Price :  {props.price}
        </Button>
      </CardActions>
    </Card>

        </div>
        </div>
    )
}

export default Cards 
