import React, { useState } from "react";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { useDispatch } from "react-redux";
import { addProjectAction } from "../../../data/actions/addProjectAction";
import { clearAllProjectAction } from "../../../data/actions/clearAllProjectAction";
function AddProjectModalBody({ onClickClose }) {
  const [projectName, setProjectName] = useState("");

  const dispatch = useDispatch();
  return (
    <div
      style={{
        minWidth: 200,
        maxWidth: 400,
      }}
    >
      <div
        style={{
          borderBottom: "1px solid lightgray",
          padding: 10,
        }}
      >
        <p
          style={{
            padding: 0,
            margin: 0,
          }}
        >
          Create a New Project
        </p>
      </div>
      <CustomInput
        placeholder="Project Name"
        value={projectName}
        onChange={(val) => {
          setProjectName(val.target.value);
        }}
      />

      <div
        style={{
          marginTop: 30,
        }}
      >
        <CustomButton
          title="Cancel"
          textStyle={{
            fontSize: 10,
          }}
          style={{
            marginRight: 20,
          }}
          onClick={onClickClose}
        />
        <CustomButton
          title="CREATE"
          textStyle={{
            fontSize: 10,
          }}
          onClick={() => {
            onClickClose();
          }}
        />
      </div>
    </div>
  );
}

export default AddProjectModalBody;
