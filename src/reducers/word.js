import {words} from "../const/data"
const wordDefault = words[Math.floor(Math.random() * words.length)].word
const wordReducer = (state = wordDefault, action) => {
    switch (action.type) {
        case "SET_WORD":
            return words[Math.floor(Math.random() * words.length)].word
        default:
            return state;
    }
}

export default wordReducer