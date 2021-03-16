import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './App.css';
const useStyles = makeStyles({
    root: {
        maxWidth: 300,
      },
      media: {
        height: 200,
      },

});

export default function MediaCard() {
  const classes = useStyles();

  return (
     
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ugnrJcsu1i9mk7aql1tCgxNIM9Fv6f7-fQ&usqp=CAU"
            title="Contemplative Reptile"
            />
            <CardContent>
           
            <Typography variant="body2" color="textSecondary" component="p">
               Understand the power of compounding!!
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
        <Button id ="button_2" variant="contained" color="primary">
      Learn More
      </Button>
        </CardActions>
        </Card>
  
    
   

  );
}