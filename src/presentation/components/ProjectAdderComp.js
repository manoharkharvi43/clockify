import React, { useEffect } from "react";
import { useState } from "react";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import { AiOutlinePlusCircle } from "react-icons/ai";
import CustomModal from "./CustomModal";
import AddProjectModalBody from "../pages/time_tracker/AddProjectModalBody";
import { connect } from "react-redux";
import { addProjectAction } from "../../data/actions/addProjectAction";

import { useDispatch } from "react-redux";
import { clearAllProjectAction } from "../../data/actions/clearAllProjectAction";
function ProjectAdderComp({ allProjects }) {
  const [project, setProject] = useState("");
  const [timer, setTimer] = useState(0);
  const [intervalTimer, setIntervalTime] = useState("");
  const [onClickAddProject, setOnClickAddProject] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(allProjects);
  }, [allProjects]);

  const startTimer = () => {
    let interval;
    if (onClickAddProject === false) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
      setIsButtonClicked(true);
      setIntervalTime(interval);
    }
  };
  useEffect(() => {}, []);
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "white",
        height: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxSizing: "border-box",
        padding: "10px 0px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "50%",
          marginLeft: 20,
        }}
      >
        <CustomInput
          value={project}
          onChange={(val) => {
            setProject(val.target.value);
          }}
          style={{
            width: "80%",
          }}
          placeholder="what are you working on?"
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "auto",
            marginLeft: 20,
            cursor: "pointer",
          }}
          onClick={() => {
            setOnClickAddProject(true);
          }}
        >
          <AiOutlinePlusCircle
            size={15}
            style={{
              color: "dodgerblue",
              marginRight: 5,
            }}
          />
          <p
            style={{
              fontSize: 12,
              color: "dodgerblue",
            }}
          >
            project
          </p>
        </div>
      </div>

      <div
        style={{
          marginRight: 20,
          display: "flex",
        }}
      >
        <p
          style={{
            marginRight: 10,
          }}
        >
          {timer}
        </p>
        <CustomButton
          title={isButtonClicked ? "STOP" : "START"}
          onClick={() => {
            if (isButtonClicked === false) startTimer();
            else {
              clearInterval(intervalTimer);
              setTimer(0);
              dispatch(
                addProjectAction({
                  projectName: project,
                  time: timer,
                })
              );
              setIsButtonClicked(false);
            }
          }}
          style={{
            backgroundColor: isButtonClicked ? "red" : "dodgerblue",
          }}
        />

        <CustomButton
          title={"DELETE ALL"}
          onClick={() => {
            dispatch(clearAllProjectAction());
          }}
          style={{
            backgroundColor: "orange",
            marginLeft: 20,
            height: "auto",
          }}
        />
      </div>

      {onClickAddProject && (
        <CustomModal
          open={onClickAddProject}
          onCloseModal={() => {
            setOnClickAddProject(false);
          }}
        >
          <AddProjectModalBody
            onClickClose={() => {
              setOnClickAddProject(false);
            }}
          />
        </CustomModal>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    allProjects: state.addProjectReducer.projects,
  };
};
export default connect(mapStateToProps)(ProjectAdderComp);
