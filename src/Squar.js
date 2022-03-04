import React from "react";

const style = {
  background: "lightgreen",
  border: "2px solid darkblue",
  fontSize: "30px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
};

const Squar = ({ value, onClick }) => {
  return (
    <>
      <button style={style} className="btn" onClick={onClick}>
        {value}
      </button>
    </>
  );
};

export default Squar;
