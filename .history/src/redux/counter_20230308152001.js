const INCREMENT = "increment";
const DECREMENT = "decrement";

const initialState = {
  count: 0,
};

const initialStateDecrement = {
  count: 0,
};

export const increment = () => ({
  type: INCREMENT,
});
export const decrement = () => ({
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
function counterReducerDecrement(state = initialStateDecrement,action) {
  switch (action.type) {
    case DECREMENT:      
    return {
      ...state,
      count: state.count -1;
    }
    default:
      break;
  }
}

export default counterReducer;
