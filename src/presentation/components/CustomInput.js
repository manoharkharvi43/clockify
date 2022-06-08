import React from "react";

function CustomInput({ placeholder, value, onChange, style }) {
  return (
    <>
      <input
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        style={{
          height: 20,
          border: "1px solid gray",
          ...style,
        }}
      />
    </>
  );
}

export default CustomInput;
