import React from "react"
import Layout from "../../components/layout/layout";

const Game_rules = () => {
  return (
    <Layout>
      <div className={"rules_holder"}>
        <p>
          At the beginning of each game the computer generates a secret code of four colors. The colors are always chosen from the same six colors as shown in the pallette.
          Duplicates are allowed.
        </p>
        <p>
          Your objective is to guess the secret code. You will have to guess the colors and put them in the same order as they are in the secret code.
        </p>
        <p>
          Choose four colors in the next available row and then click on the Submit button. The computer will score your guess in the following way:
        </p>
        <ul>
          <li>For each guess that is right in both color and position you get a black point</li>
          <li>For each guess that is right in color but not in position you get a red point</li>
        </ul>
        <p>
          You have ten rows to make your guesses. If you exhaust all of them without guessing the code, you loose the game.
        </p>
        <p>
        </p>
      </div>
    </Layout>
  )
};


export default Game_rules