import React, {useState} from 'react'
import './scoringPegs.css'

const number_of_pegs = 4;

const ScoringPegs = (props) => {
  const [colorOfScoringPegs, setColorOfScoringPegs] = useState({
    0: "#FFFFFF",
    1: "#FFFFFF",
    2: "#FFFFFF",
    3: "#FFFFFF",
  });

  const handleClick = (initialColorAndPosition, inputColorAndPosition) => {
    let colorOfScoringPegsCopy = Object.assign({}, colorOfScoringPegs);
    let initialColorAndPositionCopy = Object.assign({}, initialColorAndPosition);

    for (let keyInput in inputColorAndPosition){
      console.log("checking for postion of input", keyInput)
      for (let keyInitial in initialColorAndPositionCopy){
        console.log("checking for postion of initial", keyInitial);
        if (inputColorAndPosition[keyInput] === initialColorAndPositionCopy[keyInitial]){ //if color is present in initial
          initialColorAndPositionCopy[keyInitial] = "";
          if(keyInput === keyInitial){ //check if postion is same
            colorOfScoringPegsCopy[keyInput] = "black";
            break;
          }
          else{ //if position not same
            colorOfScoringPegsCopy[keyInput] = "red";
          }
        }
      }
    }
    setColorOfScoringPegs(colorOfScoringPegsCopy);
  };

  return (
    <div className={'scoring_pegs_holder'}>
      {/*{console.log(">>>>>>>>>>>>>>", colorOfScoringPegs)}*/}
      {
        [...Array(number_of_pegs)].map((e, i) =>
          <span className={'circle_scoring_pegs'} key={i} style={{backgroundColor: colorOfScoringPegs[i]}}
          />
        )}
      <button className={'submit_button'} onClick={handleClick.bind(this, props.initialColor, props.inputColor)}>
        Submit
      </button>
    </div>
  )
};

export default ScoringPegs;