const userActions = () => {
  return {
    type: "LOGIN_LOGOUT",
    payload: {
      loggedIn: "",
    },
  };
};

const recipeActions = () => {
  return {
    type: "ADD_RATE",
    payload: {
      recipe: { id: "", rate: Number },
    },
  };
};

export { userActions, recipeActions };
