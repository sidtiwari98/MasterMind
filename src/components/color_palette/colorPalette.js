import React from 'react'
import "./ColorPalette.css"

const ColorPalette = (props) => {

  const handleColorChange = (color) => {
    props.colorSelectedFunction(color)
  };

  return(
  <div className={'palette_holder'}>
      {
       props.colors.map((color, key)=> {
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