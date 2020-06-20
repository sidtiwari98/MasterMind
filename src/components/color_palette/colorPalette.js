import React from 'react'
import "./ColorPalette.css"

const colors = [
  "#F44E3B",
  "#FE9200",
  "#FCDC00",
  "#2196f3",
  "#9c27b0",
  "#673ab7"
];


const ColorPalette = (props) => {

  const handleColorChange = (color) => {
    console.log("the color is " + color);
    props.colorSelectedFunction(color)
  };

  return(
  <div className={'palette_holder'}>
      {
       colors.map((color, key)=> {
         return(
          <span className={'circle_palette'} key={key} style={{backgroundColor: color}}
               onClick={handleColorChange.bind(this,color)}
               />
          )
        })
      }
    </div>
   )


};

export default ColorPalette