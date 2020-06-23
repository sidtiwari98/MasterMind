import React from 'react'
import './row.css'
import Pegs from "../pegs/pegs";

const number_of_rows = 10;

const Rows = (props) => {

  const setPointEvents = (key, activeRow) => {
    if (key === activeRow) {
     return "auto"
    }
    else{
      return "none"
    }
  };

  return (
    <div className={"rows_container"}>
      {
        [...Array(number_of_rows)].map((e, i) =>
          <span id={'pegs_scoringPegs'+i} key={i} style = {{pointerEvents: setPointEvents(i, props.activeRow)}}
          >
          <Pegs selectedColor={props.selectedColor} initialColor={props.initialColor}
                rowChangeFunction={props.rowChangeFunction}/>
          </span>
        )}
    </div>
  )
};

export default Rows;