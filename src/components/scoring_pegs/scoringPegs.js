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
    // take the inputColorAndPosition object and pick the first entry. See if the color is present in initialColorAndPosition
    // if yes then check if position of the color is same in the two afore said object
      // if yes then input black color in that positon in the colorOfScoringPegs object
      // else input red
    // if no then input white color in that position in the colorOfScoringPegs object

    // for (var key in p) {
    //   if (p.hasOwnProperty(key)) {
    //     console.log(key + " -> " + p[key]);
    //   }
    // }
    console.log(initialColorAndPosition);
    console.log(inputColorAndPosition);
    let colorOfScoringPegsCopy = Object.assign({}, colorOfScoringPegs);

    for (let keyInput in inputColorAndPosition){
      for (let keyInitial in initialColorAndPosition){
        if (inputColorAndPosition[keyInput] === initialColorAndPosition[keyInitial]){ //if color is present in initial
          if(keyInput === keyInitial){ //check if postion is same
            colorOfScoringPegsCopy[keyInput] = "black"
          }
          else{ //if position not same
            colorOfScoringPegsCopy[keyInput] = "red"
          }
        }
      }
    }
    setColorOfScoringPegs(colorOfScoringPegsCopy);
  };

  return (
    <div className={'scoring_pegs_holder'}>
      {console.log(">>>>>>>>>>>>>>", colorOfScoringPegs)}
      {
        [...Array(number_of_pegs)].map((e, i) =>
          <span className={'circle_pegs'} key={i} style={{backgroundColor: colorOfScoringPegs[i]}}
          />
        )}
      <button className={'submit_button'} onClick={handleClick.bind(this, props.initialColor, props.inputColor)}>
        Submit
      </button>
    </div>
  )
};

export default ScoringPegs;