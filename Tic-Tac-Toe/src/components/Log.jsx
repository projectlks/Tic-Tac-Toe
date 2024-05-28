import React from 'react'

export default function Log({ playingInfo }) {
  return (
    <ul className="mx-auto flex-col items-center flex pb-40">
      {playingInfo.map((data) => (
        <li
          key={`${data.col} ${data.row} `}
          className="animate-slide-in-from-left text-3xl"
        >
          PLAYER {data.player} IS row {data.row} , col {data.col}
        </li>
      ))}
    </ul>
  );
}
