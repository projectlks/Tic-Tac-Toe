import PlayerInfo from "./components/playerInfo";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winningCombination";
import { useEffect, useRef, useState } from "react";
import win from './assets/win.mp3'

let originalArray = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function App() {
  const [playingInfo, setPlayingInfo] = useState([]);
  let game = [...originalArray.map( row => [...row]
)];
  let winning;

  const winRef = useRef(null)



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
       winRef.current.play();
    }
  }

  useEffect(() => {
playingInfo.length  > 4 &&  playingInfo[playingInfo.length - 2].player === "X" ? "x" : "o";


    if (playingInfo.length > 6 && !winning) {

             
      setPlayingInfo( (prev) => {
          let newInfo = prev.map((data) => ({ ...data }))
           newInfo[newInfo.length - 2].player =
             newInfo[newInfo.length - 2].player === "X" ? "x" : "o";

       newInfo.pop()
       return newInfo
       })

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
      <section className="w-[90%] md:w-[700px] border bg-gray-900 p-4 mx-auto mt-10">
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
        <audio src={win} ref={winRef}></audio>
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
