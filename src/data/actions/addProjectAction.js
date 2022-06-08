import { ADD_PROJECT } from "../constants/constants";

export const addProjectAction = (payload) => {
  return {
    type: ADD_PROJECT,
    payload,
  };
};
