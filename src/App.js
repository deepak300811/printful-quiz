import "./App.css";
import "./styles/output.css";
import InputForm from "./Container/InputForm";
import Quiz from "./Container/Quiz";
import Result from "./Container/Result";
import { useStore } from "./Store";
import { useEffect } from "react";
import { initializeFromSession } from "./Store/actionCreators";
import axios from "axios";

function App() {
  const [globalState, dispatch] = useStore();
  useEffect(() => {
    const parseStorageData = async () => {
      const storedData = sessionStorage.getItem("ultimate_quiz");
      if (storedData) {
        const parsedData = await JSON.parse(storedData);
        dispatch(initializeFromSession(parsedData));
      }
    };

    parseStorageData();
  }, [dispatch]);

  useEffect(() => {
    if (globalState.testCompletion) {
      const { examineeName, result, selectedQuiz } = globalState;
      const tempObj = {
        examineeName,
        result,
        selectedQuiz,
      };
      const postTestResult = async () => {
        try {
          await axios.post(
            "https://fake-server-ultimate-quiz-prin.herokuapp.com/Quizes",
            { tempObj }
          );
        } catch (error) {
          console.log("error while post=", error.message);
        }
      };
      postTestResult();
    }
  }, [globalState]);

  return (
    <div>
      {!globalState.examineeName.length > 0 ? (
        <InputForm />
      ) : !globalState.testCompletion ? (
        <Quiz />
      ) : (
        <Result />
      )}
    </div>
  );
}

export default App;
