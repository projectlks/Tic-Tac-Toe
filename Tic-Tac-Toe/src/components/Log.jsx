import React from "react";

export default function Log({ playingInfo }) {
  return (
    <>
      <section className="w-[90%] md:w-[700px] pt-6 md:p-6 mx-auto">
        <h1 className="text-sm md:text-3xl mb-4 font-bold">
          Game Log <br />
          Total Moves:{" "}
          {playingInfo.length > 9
            ? playingInfo.length
            : `0${playingInfo.length}`}
        </h1>
        <ul className="mx-auto w-auto text-start md:p-2">
          {playingInfo.map((data, index) => (
            <li
              key={data.key}
              className={`animate-slide-in-from-left rounded  transition-all hover:py-4 cursor-pointer duration-200 text-sm border px-4 py-2 mb-2 md:text-2xl ${
                data.player === "X"
                  ? "bg-gradient-to-tl from-cyan-400  "
                  : "bg-gradient-to-tr from-cyan-400"
              } to-blue-500 `}
            >
              Move{" "}
              {playingInfo.length - index > 9
                ? playingInfo.length - index
                : `0${playingInfo.length - index}`}
              {"   "}: Player {data.player} placed at row {data.row + 1}, column{" "}
              {data.col + 1}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
