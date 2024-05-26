import React from 'react'

export default function Log({ playingInfo }) {
  return (
    <ul>
      {playingInfo.map((data) => (
        <li key={`${data.col } ${data.row} `}>
          PLAYER  {data.player } IS row {data.row} , col {data.col}
        </li>
      ))}
    </ul>
  );
}
