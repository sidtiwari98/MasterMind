import React, {useState} from 'react'
import './pegs.css'
import ScoringPegs from "../scoring_pegs/scoringPegs";

const number_of_pegs = 4;

const Pegs = (props) => {
  const [colorOfPegs, setColorOfPegs] = useState({
    0: null,
    1: null,
    2: null,
    3: null,
  });

  const handleClick = (color, selectedPeg) => {
    let colorOfPegsCopy = Object.assign({}, colorOfPegs);
    colorOfPegsCopy[selectedPeg] = color;
    setColorOfPegs(colorOfPegsCopy);
  };

  return (
    <div className={'pegs_holder'} key = {props.key}>
      {
        [...Array(number_of_pegs)].map((e, i) =>
          <span className={'circle_pegs'} key={i} style={{backgroundColor: colorOfPegs[i]}}
                onClick={handleClick.bind(this, props.selectedColor, i)}
          />
        )}
      <div className={"scoring_pegs_holder"}>
        <ScoringPegs initialColor={props.initialColor} inputColor={colorOfPegs} rowChangeFunction = {props.rowChangeFunction}/>
      </div>
    </div>
  )
};

export default Pegs;