import React, { useState } from "react";
import { Board } from "./Board";
import { calculateWinner } from "../src/Helper";

const style = {
  width: "200px",
  margin: "20px auto",
};

export const Game = () => {
  const [board, setboard] = useState(Array(9).fill(null));

  const [xIsNext, setxIsNext] = useState(true);

  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardcopy = [...board];

    if (winner || boardcopy[i]) return;
    boardcopy[i] = xIsNext ? "X" : "0";
    setboard(boardcopy);
    setxIsNext(!xIsNext);
    console.log(boardcopy);
  };

  const JumpTo = () => {};

  const RenderMove = () => (
    <button onClick={() => setboard(Array(9).fill(null))}>ReStart</button>
  );

  return (
    <div>
      <Board square={board} onClick={handleClick} />

      <div style={style}>
        <p>
          {winner
            ? "winner :-" + winner
            : "Next Player: " + (IDBIndex ? "X" : "0")}
        </p>
        {RenderMove()}
      </div>
    </div>
  );
};
