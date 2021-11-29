import {INCREMENT_NUMBER, RESET} from "../const/index"

export const incrementNumber = () => {
    return {
        type: INCREMENT_NUMBER
    }
}

export const resetNumber = () => {
    return {
        type: RESET
    }
}