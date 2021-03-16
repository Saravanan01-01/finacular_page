import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { makeStyles } from '@material-ui/core/styles';
import Cards from './cards';
import Toggler,{Data} from './toggler';
import './chart.css';
import Card1 from './card_1';
import Card2 from './card_2';
console.log(Toggler);

const img = 'https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';

const useStyles = makeStyles({
    
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
  const data = [
    { year: '1', population: 3.018 },
    { year: '2', population: 3.682 },
    { year: '3', population: 4.440 },
    { year: '4', population: 5.310 },
    { year: '5', population: 6.127 },
    { year: '6', population: 6.930 },
    { year: '7', population: 7.525 },
    { year: '8', population: 8.525 },
    { year: '9', population: 9.525 },
  ];

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
        data
    };
  }
 
  render() {
    const { data: chartData } = this.state;

    return (
      <div className="Main">
        <div className="sub-main">
       
      <Paper>
        <div className="toggle">
        <Toggler  />
        </div>
        <Chart
          data={Data}
        >
          <ArgumentAxis />
          <ValueAxis max={7} />

          <BarSeries
            valueField="population"
            argumentField="year"
          />
          <Title text="Annual Projection" />
       
        </Chart>
      </Paper>
      </div>
      
    <div >
      <Cards />
      </div>
      </div>


    );
  }
}





