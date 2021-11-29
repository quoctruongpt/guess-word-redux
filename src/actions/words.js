import { SET_WORDS } from "../const";

export const setWords = (data) => {
    return {
        type: SET_WORDS,
        data: data
    }
}