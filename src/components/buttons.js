import React from "react";
import {useDispatch} from "react-redux"
import {changeAnswer} from "../actions/answer"

import {sym} from "../const/data"

export default function GroupButton() {
  const dispatch = useDispatch()
  const display = (symbol) => {
    if (symbol) {
      dispatch(changeAnswer(symbol))
    }
  };
  return (
    <div id="button">
      <div className="grid m-5">
        {sym.map((s) => (
          <div
            key={s}
            onClick={() => display(s)}
            className="padButton"
          >
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}
