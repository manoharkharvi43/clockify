import {
  ADD_PROJECT,
  CLEAR_ALL_PROJECT,
  DELETE_ONE_PROJECT,
} from "../constants/constants";

const initalState = {
  projects: [],
};

export const addProjectReducer = (state = initalState, { payload, type }) => {
  switch (type) {
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, payload],
      };

    case CLEAR_ALL_PROJECT:
      return {
        ...state,
        projects: [],
      };
    case DELETE_ONE_PROJECT:
      let data = state.projects.filter((project, index) => {
        return index !== payload.id;
      });

      return {
        ...state,
        projects: [data],
      };
    default:
      return state;
  }
};
