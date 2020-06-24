import React, {useState, useEffect} from 'react'
import './scoringPegs.css'

const number_of_pegs = 4;

const ScoringPegs = (props) => {


  const [colorOfScoringPegs, setColorOfScoringPegs] = useState({
    0: "white",
    1: "white",
    2: "white",
    3: "white",
  });

  useEffect(()=>{
    handleRowChangeandSendPegsData(colorOfScoringPegs)
  },[colorOfScoringPegs]);

  const handleClick = (initialColorAndPosition, inputColorAndPosition) => {
    let colorOfScoringPegsCopy = Object.assign({}, colorOfScoringPegs);
    let initialColorAndPositionCopy = Object.assign({}, initialColorAndPosition);
    let inputColorAndPositionCopy = Object.assign({}, inputColorAndPosition);
    let correct_in_position_and_color = 0;
    let correct_in_color = 0;


    //for position and color
    for (let keyInput in inputColorAndPositionCopy) {
      if (inputColorAndPositionCopy[keyInput] === initialColorAndPositionCopy[keyInput]) {
        correct_in_position_and_color++;
        inputColorAndPositionCopy[keyInput] = "";
        initialColorAndPositionCopy[keyInput] = "";
      }
    }

    //for color
    for (let keyInput in inputColorAndPositionCopy) {
      for (let keyInitial in initialColorAndPositionCopy) {
        if (inputColorAndPositionCopy[keyInput] === "" || initialColorAndPositionCopy[keyInitial] === "") {
          continue;
        }
        if (inputColorAndPositionCopy[keyInput] === initialColorAndPositionCopy[keyInitial]) {
          console.log("at", keyInput, keyInitial);
          initialColorAndPositionCopy[keyInitial] = "";
          inputColorAndPositionCopy[keyInput] = "";
          correct_in_color++;
        }
      }
    }

    let i;
    for (i = 0; i < correct_in_position_and_color; i++) {
      colorOfScoringPegsCopy[i] = "black"
    }

    for (let j = i; j < correct_in_position_and_color + correct_in_color; j++) {
      colorOfScoringPegsCopy[j] = "red"
    }

    setColorOfScoringPegs(colorOfScoringPegsCopy);
    // handleRowChangeandSendPegsData(colorOfScoringPegs)
  };

  const handleRowChangeandSendPegsData = (colorOfScoringPegs) => {
    props.rowChangeFunction(colorOfScoringPegs)
  };

  return (
    <div className={'scoring_pegs_and_button_holder'}>
      {
        [...Array(number_of_pegs)].map((e, i) =>
          <span className={'circle_scoring_pegs'} key={i} style={{backgroundColor: colorOfScoringPegs[i]}}
          />
        )}
      <div className={'button_holder'}>
        <button id={'submit_button'} onClick={handleClick.bind(this, props.initialColor, props.inputColor)}
                style={{display: props.displayofButton}}
        >
          Submit
        </button>
      </div>
    </div>
  )
};

export default ScoringPegs;