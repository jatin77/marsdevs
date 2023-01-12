import { PageActionTypes } from "./page.actionTypes";

const INITIAL_STATE = {
  details: {
    loggedIn: false,
  },
};

const pageReducer = (state = INITIAL_STATE, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case PageActionTypes.PAGE_SET_DETAILS:
      return {
        ...state,
        details: payload,
      };

    default:
      return state;
  }
};

export default pageReducer;
