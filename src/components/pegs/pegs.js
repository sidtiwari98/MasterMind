import React, {useState} from 'react'
import './pegs.css'

const number_of_pegs = 4;

const Pegs = (props) => {
  const [color, setColor] = useState("#FFFFFF");

  const handleClick = () => {
    setColor(props.selectedColor)
  };

  return(
    <div className={'pegs_holder'}>
      {
        [...Array(number_of_pegs)].map((e, i) =>
          <span className={'circle_pegs'} key={i} style={{backgroundColor: color}} onClick = {handleClick.bind(this)}
        />
        )}
    </div>
  )
};

export default Pegs;