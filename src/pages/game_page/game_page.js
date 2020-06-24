import React, {useState, useEffect} from "react"
import Layout from "../../components/layout/layout"
import ColorPalette from "../../components/color_palette/colorPalette";
import Rows from "../../components/row/row";
import './game_page.css'
import ReactModal from 'react-modal';
import {Link} from "gatsby"

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
  const [activeRow, setActiveRow] = useState(-1);
  const [isModalOpen, setisModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("Unfortunately, you have lost");


  const getSelectedColorFromPalette = (color) => {
    setSelectedColor(color);
  };

  useEffect (()=> {
    if(activeRow === 10){
      setisModalOpen(true)
    }
  },[activeRow]);

  const getActiveRowAndPegsData = (scoringPegsData) => {
    if(scoringPegsData[0] === "black" && scoringPegsData[1] === "black" &&
      scoringPegsData[2] === "black" && scoringPegsData[3] === "black" && activeRow < 10){
      setModalContent("Congratulations, you have won!!");
      setisModalOpen(true);
    }
    setActiveRow(activeRow + 1);
  };

  const handleModalClose = () => {
    setisModalOpen(false)
  };

  return (
    <Layout>
      {console.log(colorToGuess)}
      <div className={"board_holder"}>
        <ReactModal isOpen={isModalOpen}
                    style={
                      {
                        overlay: {
                          position: 'fixed',
                          top: 300,
                          left: 500,
                          height: '200px',
                          width: '400px',
                          backgroundColor: 'rgba(255, 255, 255, 0.75)'
                        }
                      }
                    }
                    shouldCloseOnOverlayClick={true}
                    shouldCloseOnEsc = {true}
                    shouldReturnFocusAfterClose={true}
                    onRequestClose = {handleModalClose}
                    ariaHideApp={false}
        >
          <div className={"modal_container"}>
          <p>{modalContent}</p>
            <button className={"submit_button"} onClick={()=>setisModalOpen(false)}>Close</button>
            <Link onClick={()=>window.location.reload()} to="/"> Play Again </Link>
          </div>
        </ReactModal>
        <Rows selectedColor={selectedColor} initialColor={colorToGuess} activeRow={activeRow}
              rowChangeFunction={getActiveRowAndPegsData}/>
        <br/>
        <ColorPalette colors={colors} colorSelectedFunction={getSelectedColorFromPalette}/>
      </div>
    </Layout>
  )
};


export default Game_page