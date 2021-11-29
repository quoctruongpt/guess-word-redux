import { INCREMENT_SCORE, RESET } from "../const"

export const setScore = () => {
    return {
        type: INCREMENT_SCORE
    }
}

export const resetScore = () => {
    return {
        type: RESET
    }
}