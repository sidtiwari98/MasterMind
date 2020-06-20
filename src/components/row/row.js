import React from 'react'
import './row.css'
import Pegs from "../pegs/pegs";

const number_of_rows = 10;

const Rows = (props) => {

  return(
    <div className={"rows_container"}>
      {
        [...Array(number_of_rows)].map((e, i) =>
          <Pegs selectedColor = {props.selectedColor}/>

        )}
    </div>
  )
};

export default Rows;