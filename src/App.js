import "./App.css";
import GroupButton from "./components/buttons";
import "bootstrap/dist/css/bootstrap.min.css";
import HeadGame from "./components/headGame";
import InputAnswer from "./components/inputAnswer";
import NewWord from "./components/newWord";
import ScoreModal from "./components/modalResult";
import { useSelector, useDispatch } from "react-redux";
import { setWords } from "./actions/words";
import { useEffect } from "react";
import axios from "axios";
import {setWord} from "./actions/word"

function App() {
  const words = useSelector((state) => state.words)
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get("https://randword.vercel.app/words?num=10").then((response) => {
      dispatch(setWord(response.data));
      dispatch(setWords(response.data));
    });
    // return dispatch(setWord(words));
  }, []);
  
  return (
    <div
      className="container-sm pb-3 rounded mt-2"
      style={{ maxWidth: "450px", backgroundColor: "#5b49ab" }}
    >
      <HeadGame />
      <div className="body mt-3 ">
        <InputAnswer />
        <GroupButton />
        <NewWord />
        <ScoreModal />
      </div>
    </div>
  );
}

export default App;
