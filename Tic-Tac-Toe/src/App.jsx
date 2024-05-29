import PlayerInfo from "./components/PlayerInfo"; 
import GameBoard from "./components/GameBoard";
import Log from "./components/Log"; 
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./winningCombination"; 
import { useEffect, useRef, useState } from "react"; 
import win from "./assets/win.mp3"; 

// Initial game state
const originalArray = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function App() {
  // State variables
  const [playingInfo, setPlayingInfo] = useState([]);
  const [logArray, setLogArray] = useState([]);
  const [player1Name, setPlayer1Name] = useState('player 1' );
  const [player2Name, setPlayer2Name] = useState("player 2");
  const winRef = useRef(null); 

  // Creating a copy of the original game array
  const game = originalArray.map((row) => [...row]);

  let winning;

  // Updating the game array with player moves
  for (const turn of playingInfo) {
    const { row, col, player } = turn;
    game[row][col] = player;
  }

  // Checking for winning combinations
  for (const info of WINNING_COMBINATIONS) {
    const first = game[info[0].row][info[0].column];
    const second = game[info[1].row][info[1].column];
    const third = game[info[2].row][info[2].column];

    // If a winning combination is found
    if (first && first === second && first === third) {
      winRef.current.play(); // Play win sound
      winning = first === 'X' ? player1Name : player2Name ; // Set the winner
      break; // Exit the loop
    }
  }

  // Effect hook to switch players after a certain number of moves
  useEffect(() => {
    if (playingInfo.length === 5) {
      playingInfo[playingInfo.length - 1].player =
        playingInfo[playingInfo.length - 1].player === "X" ? "x" : "o";
    }

    if (playingInfo.length > 6 && !winning) {
      setPlayingInfo((prev) => {
        let newInfo = prev.map((data) => ({ ...data }));
        newInfo[newInfo.length - 2].player =
          newInfo[newInfo.length - 2].player === "X" ? "x" : "o";
        newInfo.pop();
        return newInfo;
      });
    }
  }, [playingInfo]);

  // Function to determine the current player
  let currentPlayer = "X";
  const testFun = () => {
    if (playingInfo.length > 0 && playingInfo[0].player === "X") {
      currentPlayer = "O";
    }
  };
  testFun();

  // Click handler function
  const handleClick = (rowIndex, colIndex) => {
    const info = {
      row: rowIndex,
      col: colIndex,
      player: currentPlayer,
      key: Math.random()
    };

    // Update playingInfo and logArray
    setPlayingInfo((prev) => [info, ...prev]);
    setLogArray((prev) => [info, ...prev]);
  };

  // Function to restart the game
  const restartFun = () => {
    setLogArray([]);
    setPlayingInfo([]);
  };

  return (
    <>
      {/* Game section */}
      <section className="w-[90%] md:w-[700px] border bg-red-900 p-4 mx-auto mt-10">
        {/* Player information */}
        <ol className="flex justify-between space-x-4 w-full border-b pb-6">
          <PlayerInfo
            name={player1Name}
            sign="X"
            isActive={currentPlayer === "X"}
            setPlayerName={setPlayer1Name}
          />
          <PlayerInfo
            name={player2Name}
            sign="O"
            isActive={currentPlayer === "O"}
            setPlayerName={setPlayer2Name}
          />
        </ol>

        {/* Audio element for win sound */}
        <audio src={win} ref={winRef}></audio>

        {/* Render GameOver component if there is a winner */}
        {winning && <GameOver winner={winning} restartFun={restartFun} />}

        {/* Render the GameBoard component */}
        <GameBoard game={game} handleClick={handleClick} gameOver={winning} />
      </section>

      {/* Render the Log component if there are moves */}
      {!!logArray.length && <Log playingInfo={logArray} />}
    </>
  );
}

export default App;
