const INCREMENT = "increment";

const initialState = {
  count: 0,
};

export const increment = () => ({
  type: INCREMENT,
});

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
  }
}

export default counterReducer;
