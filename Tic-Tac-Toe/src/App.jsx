import PlayerInfo from "./components/playerInfo";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winningCombination";
import { useEffect, useState } from "react";

let originalArray = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function App() {
  const [playingInfo, setPlayingInfo] = useState([]);
  let game = originalArray;
  let winning;

  for (const turn of playingInfo) {
    const { row, col, player } = turn;
    game[row][col] = player;
  }

  // winnning state
  for (const info of WINNING_COMBINATIONS) {
    const first = game[info[0].row][info[0].column];
    const second = game[info[1].row][info[1].column];
    const third = game[info[2].row][info[2].column];

    if (first && first === second && first === third) {
      winning = first;
    }
  }

  useEffect(() => {
    if (playingInfo.length === 8 && !winning) {
      let row = playingInfo[7].row;
      let col = playingInfo[7].col;

      game[row][col] = null;
      playingInfo.pop();
    }
  }, [playingInfo]);
  let currentPlayer;
  let testFun = () => {
    currentPlayer = "X";
    if (playingInfo.length > 0 && playingInfo[0].player === "X") {
      currentPlayer = "O";
    }
    return currentPlayer;
  };
  testFun();
  const handleClick = (rowIndex, colIndex) => {
    setPlayingInfo((prev) => {
      let info = { row: rowIndex, col: colIndex, player: currentPlayer };
      let data = [info, ...prev];
      return data;
    });
  };

  return (
    <>
      <section className="w-[90%] md:w-[700px] border bg-gray-900 p-4">
        <ol className="flex justify-between space-x-4 w-full border-b pb-6">
          <PlayerInfo
            name="player 1"
            sign="X"
            isAvtive={currentPlayer === "X"}
          />
          <PlayerInfo
            name="player 2"
            sign="O"
            isAvtive={currentPlayer === "O"}
          />
        </ol>
        {winning && (
          <p className="text-3xl text-gray-100"> Winner is {winning} </p>
        )}
        <GameBoard game={game} handleClick={handleClick} gameOver={winning} />
      </section>
      <Log playingInfo={playingInfo} />
    </>
  );
}

export default App;
