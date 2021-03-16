import React from 'react';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export const Data = [
  { year: '1', population: 3.018 },
  { year: '2', population: 3.682 },
  { year: '3', population: 3.440 },
  { year: '4', population: 3.310 },
  { year: '5', population: 4.127 },
  { year: '6', population: 3.930 },
  { year: '7', population: 3.525 },
  { year: '8', population: 3.525 },
  { year: '9', population: 3.525 },
];



export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    var align = newAlignment;
    console.log(newAlignment);
    setAlignment(newAlignment);
   
  };
 
  

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned">
        <h4>10y</h4>
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
      <h4>20y</h4>
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
      <h4>30y</h4>
      </ToggleButton>
     
    </ToggleButtonGroup>
  );
}

