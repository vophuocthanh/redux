const initialState = {
  count: 0,
};

export const increment = () => ({
  type: "increment",
});

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "increment":
      break;

    default:
      break;
  }
}
