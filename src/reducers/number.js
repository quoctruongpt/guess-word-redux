const numberReducer = (state = 1, action) => {
    switch (action.type) {
        case 'INCREMENT_NUMBER':
            return state + 1
        case 'RESET':
            return 1
        default:
            return state
    }
}

export default numberReducer