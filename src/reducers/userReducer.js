let initialState = false;

const userReducer = (state = initialState, action) => {
  if (action.type == "LOGIN_LOGOUT") {
    return !state;
  } else return state;
};

export default userReducer;
