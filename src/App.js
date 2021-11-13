import "./App.css";
import "./styles/output.css";
import InputForm from "./Container/InputForm";
import Quiz from "./Container/Quiz";
import Result from "./Container/Result";
import { useStore } from "./Store";
import { useEffect } from "react";
import { initializeFromSession } from "./Store/QuizDataReducer";

function App() {
  const [globalState, dispatch] = useStore();
  useEffect(() => {
    const parseStorageData = async () => {
      const storedData = sessionStorage.getItem("ultimate_quiz");
      console.log("unparsedData", storedData);
      if (storedData) {
        const parsedData = await JSON.parse(storedData);
        console.log("parsedData", parsedData);
        dispatch(initializeFromSession(parsedData));
      }
    };
    parseStorageData();
  }, [dispatch]);
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
