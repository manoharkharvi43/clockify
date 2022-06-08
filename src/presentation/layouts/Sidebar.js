import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
const NavbarOptions = ({ title, icon }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0px 5px 0px 5px",
        }}
      >
        {icon}
        <p
          style={{
            fontSize: 12,
          }}
        >
          {title}
        </p>
      </div>
    </>
  );
};
function Sidebar() {
  return (
    <div
      style={{
        width: 130,
        height: "100vh",
        backgroundColor: "white",
        borderRight: "1px solid lightgray",
      }}
    >
      <NavbarOptions
        icon={<AiOutlineClockCircle size={20} />}
        title="TIME TRACKER"
      />
    </div>
  );
}

export default Sidebar;
