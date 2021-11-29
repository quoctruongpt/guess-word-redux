const wordsReducer = (state=[], action) => {
    switch (action.type) {
        case "SET_WORDS":
            return action.data
        default:
            return state
    }
}

export default wordsReducer