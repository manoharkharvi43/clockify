import React from "react";
import MidArea from "./MidArea";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function LayoutIndex() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
        }}
      >
        <Sidebar />
        <MidArea />
      </div>
    </div>
  );
}

export default LayoutIndex;
