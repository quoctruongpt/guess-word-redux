import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, setTimer } from "../actions/timer";
import { setWord } from "../actions/word";
import { setScore } from "../actions/score";
import { incrementNumber } from "../actions/number";
import { setStatus } from "../actions/status";
import { showWord } from "../actions/newWord";

export default function HeadGame() {
  const score = useSelector((state) => state.score);
  const timer = useSelector((state) => state.timer);
  const number = useSelector((state) => state.number);
  const answer = useSelector((state) => state.answer);
  const word = useSelector((state) => state.word);
  const status = useSelector((state) => state.status);
  const dispatch = useDispatch();
  const words = useSelector((state) => state.words)

  useEffect(() => {
    if (timer === 0) {
      if (answer.includes("_")) {
        dispatch(setStatus(2));
        setTimeout(() => {
          dispatch(setTimer(10));
          dispatch(incrementNumber());
          dispatch(setWord(words));
          dispatch(setStatus(0));
        }, 1500);
      }
      return;
    }
    const time = setTimeout(() => dispatch(decrement()), 1000);

    return () => clearTimeout(time);
  }, [timer]);

  useEffect(() => {
    if (!answer.includes("_")) {
      dispatch(showWord(word));
      if (answer === word) {
        dispatch(setScore());
        dispatch(setStatus(1));
      } else {
        dispatch(setStatus(2));
      }
      setTimeout(() => {
        dispatch(setTimer(10));
        dispatch(incrementNumber());
        dispatch(setWord(words));
        dispatch(setStatus(0));
      }, 1500);
      return;
    }
  }, [answer]);
  return (
    <div
      className="row fs-4 p-3"
      style={{ backgroundColor: "#211945", color: "white" }}
      minheight="80px"
    >
      <div className="col-4 mx-auto" id="score">
        <p>SCORE:</p>
        {score}
      </div>
      <div className="col-4 text-center" id="wordNumber">
        {number} / 10
        <div className="fs-2">
          {status === 1 ? (
            <i className="fas fa-check-circle" style={{ color: "green" }}></i>
          ) : status === 2 ? (
            <i className="fas fa-times-circle" style={{ color: "red" }}></i>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="col-4 text-end" id="timer">
        <p>TIMER:</p>
        {timer}
      </div>
    </div>
  );
}
