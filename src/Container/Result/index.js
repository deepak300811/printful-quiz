import React from "react";
import { useStore } from "../../Store";
const Result = () => {
  const [globalState] = useStore();
  return (
    <div>
      Hey {globalState.examineeName} you marked {globalState.result.correct}{" "}
      correct answered out of {globalState.result.total} questions.
    </div>
  );
};

export default Result;
