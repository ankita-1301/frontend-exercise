import RecipeData from "../../recipes.json";

const recipeReducer = (state = RecipeData, action) => {
  if (action.type == "ADD_RATE") {
    let newState = state.map((r) => {
      if (r.id === action.payload.recipe.id) {
        r.ratings.push(action.payload.recipe.rate);
        let ratingsSum = r.ratings.reduce((a, b) => a + b, 0);
        let average = ratingsSum / r.ratings.length;
        r.rating = !Number.isInteger(average) ? average.toFixed(1) : average;
      }
      return r;
    });
    return newState;
  } else return state;
};

export default recipeReducer;
