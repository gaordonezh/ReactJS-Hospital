// action - state management
import * as actionTypes from "../actions";

export const initialState = {
  token: "",
  data: {},
};

//-----------------------|| CUSTOMIZATION REDUCER ||-----------------------//

const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case actionTypes.USER_DATA:
      return state.data;
    default:
      return state;
  }
};

export default userInfo;
