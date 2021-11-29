import {combineReducers} from "redux"

import timer from "./timer"
import word from "./word"
import newWord from "./newWord"
import answer from "./answer"
import score from "./score"
import words from "./words"
import number from "./number"
import status from "./status"

const allReducers = combineReducers({timer, word, newWord, answer, score, words, number, status})

export default allReducers