import { SET_ANSWER, CHANGE_ANSWER } from "../const"

export const setAnswer = (newWord) => {
    return {
        type: SET_ANSWER,
        value: newWord,
    }
}

export const changeAnswer = (symbol) => {
    return {
        type: CHANGE_ANSWER,
        symbol: symbol,
    }
}