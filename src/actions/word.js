import { SET_WORD } from "../const"
export const setWord = (words) => {
    return {
        type: SET_WORD,
        payload: words
    }
}