let initialState = false;

const userReducer = (state = initialState, action) => {
  switch (
    action.type //switch used so that in future if there are many action.type then the code can be reused
  ) {
    case "LOGIN_LOGOUT":
      return !state;
    default:
      return state;
  }
};

export default userReducer;
