import React, {useState} from 'react'
import './scoringPegs.css'

const number_of_pegs = 4;

const ScoringPegs = (props) => {

  for(let key in props.inputColor){

    //component will mount
    if(props.inputColor[0] && props.inputColor[1] && props.inputColor[2] && props.inputColor[3]){
      document.getElementById("submit_button").setAttribute('style', 'display: inline')
    }
  }

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
      for (let keyInitial in initialColorAndPositionCopy){
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
    handleRowChange()
  };

  const handleRowChange = () => {
    props.rowChangeFunction()
  };

  return (
    <div className={'scoring_pegs_holder'}>
      {
        [...Array(number_of_pegs)].map((e, i) =>
          <span className={'circle_scoring_pegs'} key={i} style={{backgroundColor: colorOfScoringPegs[i]}}
          />
        )}
      <button id={'submit_button'} onClick={handleClick.bind(this, props.initialColor, props.inputColor)}
      style={{display: "none"}}
      >
        Submit
      </button>
    </div>
  )
};

export default ScoringPegs;