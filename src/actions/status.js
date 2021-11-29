import {SET_STATUS} from '../const'

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        payload: status
    }
}