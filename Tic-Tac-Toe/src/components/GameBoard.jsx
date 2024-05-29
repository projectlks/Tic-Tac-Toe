import { useRef } from "react";
import sound from "../assets/click Sound.mp3";
import error from '../assets/error Sound.mp3'

export default function GameBoard({ game, handleClick, gameOver }) {
  const audioRef = useRef(null);
  const errorRef = useRef(null)

  const playSound = () => {
    audioRef.current.play();
  };
  const errorSound = () => {
    errorRef.current.play()
  }

  return (
    <>
      <section className="space-y-6 font-bold md:p-10 p-5 border rounded-lg mx-auto w-full max-w-[450px] mt-6">
        <audio src={sound} ref={audioRef}></audio>
        <audio src={error} ref={errorRef}></audio>
        {game.map((row, rowIndex) => (
          <div
            className="row place-items-center grid grid-cols-3 gap-3 md:gap-6 w-full"
            key={rowIndex}
          >
            {row.map((playerSymbol, colIndex) => (
              <button
                disabled={playerSymbol !== null || gameOver}
                className={`col select-none active:w-[90%] text-3xl md:text-6xl active:text-5xl bg-gradient-to-tr from-blue-500 to-blue-200 uppercase duration-400 transition-all w-full rounded mx-auto aspect-square ${
                  playerSymbol === "x" || playerSymbol === "o"
                    ? "text-red-500 from-red-500 to-orange-200 bg-opacity-20"
                    : "text-black hover:from-blue-700 hover:to-blue-300"
                }`}
                key={colIndex}
                onClick={() => {
                  playSound();

                  handleClick(rowIndex, colIndex);
                }}
              >
                {playerSymbol}
              </button>
            ))}
          </div>
        ))}
      </section>
    </>
  );
}
