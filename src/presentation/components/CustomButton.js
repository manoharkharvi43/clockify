import React from "react";

function CustomButton({ title, onClick, textStyle, style }) {
  return (
    <>
      <button
        onClick={onClick}
        style={{
          height: "auto",
          backgroundColor: "dodgerblue",
          width: 60,
          outline: "none",
          border: "1px solid dodgerblue",
          cursor: "pointer",
          ...style,
        }}
      >
        <p
          style={{
            fontSize: 8,
            color: "white",
            ...textStyle,
          }}
        >
          {title}
        </p>
      </button>
    </>
  );
}

export default CustomButton;
