import { DECREMENT, SET_TIMER } from "../const"

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const setTimer = (timer) => {
    return {
        type: SET_TIMER,
        timer: timer
    }
}