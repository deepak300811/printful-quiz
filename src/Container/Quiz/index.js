import React, { useState, useEffect } from "react";
import { useStore } from "../../Store";
import { setQuestionsLength } from "../../Store/QuizDataReducer";
import SingleQuestion from "../../Components/Single-Question";
import QuizHeader from "../../Components/QuizHeader";
import axios from "axios";
const Quiz = () => {
  const [globalState, dispatch] = useStore();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const res = await axios.get(
          `https://printful.com/test-quiz.php?action=questions&quizId=${globalState.selectedQuiz.id}`
        );
        console.log("questions=", res.data.length);
        setQuestions(res.data);
        dispatch(setQuestionsLength(res.data.length));
      } catch (error) {
        console.log("Error=", error.message);
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
      ) : (
        <div className="loader mt-80">Loading...</div>
      )}
    </div>
  );
};

export default Quiz;
