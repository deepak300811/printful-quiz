import React, { useState, useEffect } from "react";
import { useStore } from "../../Store";
import { setErrorFlag, setQuestionsLength } from "../../Store/actionCreators";
import SingleQuestion from "../../Components/Single-Question";
import QuizHeader from "../../Components/QuizHeader";
import axios from "axios";
import Error from "../../Components/Error";

const Quiz = () => {
  const [globalState, dispatch] = useStore();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const getQuestions = async () => {
      dispatch(setErrorFlag(false));
      try {
        const res = await axios.get(
          `https://printful.com/test-quiz.php?action=questions&quizId=${globalState.selectedQuiz.id}`
        );
        setQuestions(res.data);
        dispatch(setQuestionsLength(res.data.length));
      } catch (error) {
        console.log("Error=", error.message);
        dispatch(setErrorFlag(true));
      }
    };
    getQuestions();
  }, [globalState.selectedQuiz, dispatch]);

  return (
    <div>
      <QuizHeader />

      {questions.length > 0 ? (
        <>
          <SingleQuestion
            quizID={globalState.selectedQuiz.id}
            questionId={questions[globalState.selectedQuestion].id}
            question={questions[globalState.selectedQuestion].title}
            selectedQuestionIndex={globalState.selectedQuestion}
          />
        </>
      ) : !globalState.error ? (
        <div className="loader mt-80">Loading...</div>
      ) : (
        <Error />
      )}
    </div>
  );
};

export default Quiz;
