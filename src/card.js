import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './card.css';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  

  
 class Card1 extends React.Component 
 {
   
   render(){ 
    let id = `${this.props.id}`;
    let head = `${this.props.head}`;
    let low = `${this.props.low}`;
    let img = `${this.props.img}`;
    return (
       
    <div className="card">
      <Card className="">
        <CardContent>
          <Typography className="" color="textSecondary" gutterBottom>
           {head}
          </Typography>
          <hr></hr>
          
           <h5> {id}</h5>
          
          <Typography className="input" color="textSecondary">
            <input id="input_text" type="text"  />
          </Typography>
          <AccountBalanceIcon  id="img_card" />
          <br />
<br />    <Typography variant="body2" component="p">
            {low}
          </Typography>
        </CardContent>
        
      </Card>
    </div>
        
    );
  }
}

export default Card1;