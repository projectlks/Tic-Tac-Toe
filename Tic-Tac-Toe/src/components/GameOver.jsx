import React from "react";

export default function GameOver({ winner, restartFun }) {
  return (
    <div className="absolute text-white top-1/2 p-8 rounded-lg flex flex-col justify-between transform -translate-y-1/2 left-0 right-0 mx-auto bg-gray-800 bg-opacity-75 w-[350px] md:w-[400px] h-[400px]">
      <span>
        <h1 className="text-5xl font-extrabold mb-4">Game Over</h1>
        <p className="text-xl">
          Congratulations, {winner}! You are the champion!
        </p>
      </span>
      <button
        onClick={restartFun}
        className="w-32 font-bold py-2 self-end rounded outline-none bg-gradient-to-tr from-blue-500 to-blue-200 hover:from-blue-700 hover:to-blue-300 "
      >
        Play Again
      </button>
    </div>
  );
}
