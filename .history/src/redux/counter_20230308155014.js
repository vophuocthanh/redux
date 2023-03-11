const INCREMENT = "increment";
const DECREMENT = "decrement";
const INCREMENTBYVALUE = "incrementbyvalue";

const initialState = {
  count: 0,
};

export const increment = () => ({
  type: INCREMENT,
});
export const decrement = () => ({
  type: DECREMENT,
});

export const incrementByValue = () => ({
  type: INCREMENTBYVALUE,
});

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}

export default counterReducer;
