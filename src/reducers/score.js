const scoreReducer = (state=0, action) => {
    switch (action.type) {
        case "INCREMENT_SCORE":
            return state + 10
        case "RESET":
            return 0
        default:
            return state
    }
}

export default scoreReducer