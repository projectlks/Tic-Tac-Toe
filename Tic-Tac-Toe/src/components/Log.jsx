import React from "react";

export default function Log({ playingInfo }) {
  return (
    <>
      <section className="w-[90%] md:w-[700px] p-6 mx-auto ">
        <h1 className="text-sm md:text-3xl font-bold">
          Game Log <br />
          Total Moves: {playingInfo.length}
        </h1>
        <ul className="mx-auto w-auto text-start p-2">
          {playingInfo.map((data, index) => (
            <li
              key={data.key}
              className="animate-slide-in-from-left text-sm md:text-2xl"
            >
              Move {playingInfo.length - index}: Player {data.player} placed at
              row {data.row + 1}, column {data.col + 1}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
 