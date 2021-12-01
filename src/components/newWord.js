import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setNewWord } from "../actions/newWord";

export default function NewWord({ styl = 0 }) {
  const word = useSelector((state) => state.word);
  const newWord = useSelector((state) => state.newWord);
  const dispatch = useDispatch();
  useEffect(() => {
    if (word) dispatch(setNewWord(word));
  }, [word]);
  return (
    <div
      className="text-center fs-3"
      style={
        ({ letterSpacing: "10px" },
        styl === 0
          ? { border: "2px solid white", color: "white" }
          : styl === 1
          ? {
              animationName: "borderr",
              animationDuration: "0.5s",
              animationIterationCount: "1000",
              color: "white",
            }
          : {
              animationName: "border2",
              animationDuration: "0.5s",
              animationIterationCount: "1000",
              color: "white",
            })
      }
    >
      {newWord}
    </div>
  );
}
