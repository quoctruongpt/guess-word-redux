const answerReducer = (state = "_", action) => {
  switch (action.type) {
    case "SET_ANSWER":
      return action.value;
    case "CHANGE_ANSWER":
        return state.replace("_", action.symbol)
    default:
      return state;
  }
};

export default answerReducer
