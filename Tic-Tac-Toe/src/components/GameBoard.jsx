
export default function GameBoard({ game, handleClick, gameOver }) {
  return (
    <>
      <section className="space-y-6 font-bold  p-10 border rounded-lg mx-auto w-full max-w-[450px] mt-6">
        {game.map((row, rowIndex) => (
          <div
            className="row place-items-center grid grid-cols-3 gap-6 w-full"
            key={rowIndex}
          >
            {row.map((playerSymbol, colIndex) => (
              <button
                disabled={playerSymbol !== null || gameOver}
                className={`col  select-none active:w-[90%] text-6xl active:text-5xl bg-gradient-to-tr from-blue-500 to-blue-200   uppercase  duration-400 transition-all w-full rounded mx-auto aspect-square ${
                  playerSymbol === "x" || playerSymbol === "o"
                    ? "text-red-500 from-red-500 to-orange-200 bg-opacity-20"
                    : "text-black hover:from-blue-700 hover:to-blue-300 "
                }`}
                key={colIndex}
                onClick={() => {
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
