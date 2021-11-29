const newWordReducer = (state = "___", action) => {
  switch (action.type) {
    case "SET_NEW_WORD":
      const arr = action.payload.split("");
      const newArr = arr.map((item, index) => {
        if (index === 0) {
          return item;
        } else if (index === 1) {
          return "_";
        } else {
          const i = Math.floor(Math.random() * 5);
          if (i === 1) {
            return "_";
          } else return item;
        }
      });
      return newArr.join("");
    case "SHOW_WORD":
      return action.payload
    default:
      return state;
  }
};

export default newWordReducer;
