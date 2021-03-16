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

export default function MediaCard1() {
  const classes = useStyles();

  return (
     
        <Card id ="card_2"className={classes.root}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image="data:image/png;base64,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"
            title="Contemplative Reptile"
            />
            <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
                Track all your expenses on a daily basis
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            
        <Button id ="button_2" variant="contained" color="primary">
       Track Now
      </Button>
        </CardActions>
        </Card>
  
    
   

  );
}