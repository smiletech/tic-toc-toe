import React from "react";
import Squar from "./Squar";
const style = {
  border: "4px solid darkblue",
  borderRadius: "10px",
  width: "250px",
  height: "250px",
  margin: "0 auto",
  display: "grid",
  gridTemplate: "repeat(3,1fr) / repeat(3,1fr)",
};

export const Board = ({ square, onClick }) => {
  return (
    <div style={style}>
      {square.map((squ, i) => (
        <Squar key={i} value={squ} onClick={() => onClick(i)} />
      ))}
    </div>
  );
};
