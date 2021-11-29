export const timerReducer = (state = 10, action) => {
  switch (action.type) {
    case "DECREMENT":
      return state - 1;
    case "SET_TIMER":
      return action.timer
    default:
      return state;
  }
};

export default timerReducer