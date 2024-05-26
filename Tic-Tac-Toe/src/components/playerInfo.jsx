import React, { useRef, useState } from "react";

export default function PlayerInfo({ name, sign, isAvtive }) {
  const [isEdit, setIsEdit] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  const [error, setError] = useState(false);
  const nameRef = useRef();

  const handleButtonClick = () => {
    if (isEdit) {
      if (playerName) {
        setIsEdit(false);
      } else {
        setError(true);
      }
    } else {
      setIsEdit(true);
      setTimeout(() => nameRef.current.focus(), 0);
    }
  };

  return (
    <li
      className={`flex transition-all justify-evenly space-x-1 md:space-x-4 font-bold text-gray-300 items-center md:px-2 py-2 border-2 w-1/2 md:w-[40%] ${
        isAvtive ? " rounded-xl text-blue-500 border-blue-500 border " : ""
      }`}
    >
      <div className="w-[100px] text-xs md:text-base whitespace-nowrap md:w-[150px]">
        {!isEdit ? (
          <div className="min-w-full px-3 p-1  border-gray-900 text-center">
            {playerName}
          </div>
        ) : (
          <input
            ref={nameRef}
            value={playerName}
            onChange={(e) => {
              setPlayerName(e.target.value);
              setError(false);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleButtonClick();
              }
            }}
            type="text"
            className={`w-full text-center  bg-black bg-opacity-20 transition-all px-3 focus rounded-md p-1 outline-none ${
              error ? "bg-red-700" : "bg-blue-500"
            }`}
          />
        )}
      </div>

      <span className="text-md md:text-3xl text-blue-500 hidden md:inline-block border px-1 md:px-2 rounded">{sign}</span>

      <button
        type="button"
        className="hover:text-red-500 max-w-14  min-w-14 transition-all hover:bg-slate-800 md:px-3 px-2 text-xs md:text-base py-0.5 rounded-sm"
        onClick={handleButtonClick}
      >
        {isEdit ? "Save" : "Edit"}
      </button>
    </li>
  );
}
