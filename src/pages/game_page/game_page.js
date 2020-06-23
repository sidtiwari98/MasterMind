import React, {useState} from "react"
import Layout from "../../components/layout/layout"
import ColorPalette from "../../components/color_palette/colorPalette";
import Rows from "../../components/row/row";
import './game_page.css'

const colors = ["red",
  "blue",
  "pink",
  "black",
  "yellow",
  "green"];

const colorToGuess = {
  0: colors[Math.floor(Math.random() * colors.length)],
  1: colors[Math.floor(Math.random() * colors.length)],
  2: colors[Math.floor(Math.random() * colors.length)],
  3: colors[Math.floor(Math.random() * colors.length)]
};


const Game_page = () => {

  const [selectedColor, setSelectedColor] = useState("0");
  const [activeRow, setActiveRow] = useState(0);


  const getSelectedColorFromPalette = (color) => {
    setSelectedColor(color);
  };

  const getActiveRow = () => {
    setActiveRow(activeRow + 1);
  };

  return (
    <Layout>
      {console.log(colorToGuess)}
      <div className={"board_holder"}>
        <Rows selectedColor={selectedColor} initialColor={colorToGuess} activeRow={activeRow}
              rowChangeFunction={getActiveRow}/>
        <br/>
        <ColorPalette colors={colors} colorSelectedFunction={getSelectedColorFromPalette}/>
      </div>
    </Layout>
  )
};


export default Game_page