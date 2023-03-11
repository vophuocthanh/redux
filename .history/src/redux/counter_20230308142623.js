const INCREMENT = "increment";

const initialState = {
  count: 0,
};

export const increment = () => ({
  type: "increment",
});

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
      };
    default:
      break;
  }
}

export default counterReducer;
