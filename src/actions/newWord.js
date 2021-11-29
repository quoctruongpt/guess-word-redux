import { SET_NEW_WORD, SHOW_WORD } from "../const"

export const setNewWord = (word) => {
    return {
        type: SET_NEW_WORD,
        payload: word
    }
}

export const showWord = (word) => {
    return {
        type: SHOW_WORD,
        payload: word
    }
}