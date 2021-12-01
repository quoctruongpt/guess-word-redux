// import {words} from "../const/data"
// const wordDefault = words[Math.floor(Math.random() * words.length)].word
const wordReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_WORD":
      return action.payload[Math.floor(Math.random() * 10)].toUpperCase();
    default:
      return state;
  }
};

export default wordReducer;
