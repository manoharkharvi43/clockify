import React from "react";
import { connect } from "react-redux";

const ProjectDisplayer = ({ projectName, time }) => {
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          marginBottom: 10,
          backgroundColor: "white",
          padding: "10px",
        }}
      >
        <p style={{ margin: 0, padding: 0, fontSize: 14, marginRight: 20 }}>
          {projectName}
        </p>
        <p style={{ margin: 0, padding: 0, fontSize: 14 }}>{time}</p>
      </div>
    </>
  );
};
function DisplayAllProjects({ allProjects }) {
  return (
    <div
      style={{
        width: "90%",
        marginTop: 50,
      }}
    >
      {allProjects &&
        allProjects?.map((project, index) => (
          <>
            <ProjectDisplayer
              projectName={project.projectName}
              time={project.time}
            />
          </>
        ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    allProjects: state.addProjectReducer.projects,
  };
};

export default connect(mapStateToProps)(DisplayAllProjects);
