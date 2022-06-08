import React from "react";
import ProjectAdderComp from "../components/ProjectAdderComp";
import DisplayAllProjects from "../pages/time_tracker/DisplayAllProjects";

function MidArea() {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "lightgray",
        padding: "50px 20px 0px 20px",
      }}
    >
      <ProjectAdderComp />
      <DisplayAllProjects />
    </div>
  );
}

export default MidArea;
