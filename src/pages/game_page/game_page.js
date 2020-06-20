import React, {useState} from "react"
import Layout from "../../components/layout/layout"
import ColorPalette from "../../components/color_palette/colorPalette";
import Rows from "../../components/row/row";


const Game_page = () => {

  const [selectedColor, setSelectedColor] = useState("0");

  const getSelectedColorFromPalette = (color) => {
    setSelectedColor(color);
  };

  return (
    <Layout>
      {console.log(selectedColor)}
      <p>dsahhs ah</p>
      <ColorPalette colorSelectedFunction = {getSelectedColorFromPalette}/>
      <Rows selectedColor = {selectedColor}/>
    </Layout>
  )
};


export default Game_page