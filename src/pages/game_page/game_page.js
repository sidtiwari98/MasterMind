import React, {useState} from "react"
import Layout from "../../components/layout/layout"
import ColorPalette from "../../components/color_palette/colorPalette";
import Rows from "../../components/row/row";


const Game_page = () => {

  const [selectedColor, setSelectedColor] = useState("0");
  const [activeRow, setActiveRow] = useState(0);

  // const colorToGuess = {
  //   0: "#F44E3B",
  //   1: "#FE9200",
  //   2: "#FCDC00",
  //   3: "#2196f3"
  // };

  const colorToGuess = {
    0: "#F44E3B",
    1: "#F44E3B",
    2: "#F44E3B",
    3: "#F44E3B"
  };


  const getSelectedColorFromPalette = (color) => {
    setSelectedColor(color);
  };

  const getActiveRow = () => {
    setActiveRow(activeRow + 1);
  };

  return (
    <Layout>
      <ColorPalette colorSelectedFunction = {getSelectedColorFromPalette}/>
      <Rows selectedColor = {selectedColor} initialColor = {colorToGuess} activeRow = {activeRow} rowChangeFunction = {getActiveRow}/>
      <br />
    </Layout>
  )
};


export default Game_page