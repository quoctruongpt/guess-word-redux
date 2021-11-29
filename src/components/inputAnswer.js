import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {setAnswer} from "../actions/answer"

export default function InputAnswer() {
  const answer = useSelector((state) => state.answer);
  const newWord = useSelector((state) => state.newWord);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(newWord && newWord.includes("_")) {
      dispatch(setAnswer(newWord));
    }
  }, [newWord])
  return (
    <div className="input-group ">
      <input
        type="text"
        style={{ backgroundColor: "#211945", color: "white" }}
        className="form-control text-center fs-3 me-5 ms-5"
        value={answer}
        disabled
      />
    </div>
  );
}
