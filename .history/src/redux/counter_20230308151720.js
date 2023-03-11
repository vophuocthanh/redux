const INCREMENT = "increment";
const DECREMENT = "decrement";

const initialState = {
  count: 0,
};

export const increment = () => ({
  type: INCREMENT,
  type: DECREMENT,
});

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
}

export default counterReducer;
