import axios from "axios";
import React, { useEffect, useState } from "react";
import { useStore } from "../../Store";
import { nextQuestion, updateScore } from "../../Store/QuizDataReducer";

const SingleQuestion = ({
  questionId,
  question,
  quizID,
  selectedQuestionIndex,
}) => {
  const [options, setOptions] = useState([]);
  const [, dispatch] = useStore();
  const [selectedOption, setSelectedOption] = useState("");
  useEffect(() => {
    const getOptions = async () => {
      try {
        const res = await axios.get(
          `https://printful.com/test-quiz.php?action=answers&quizId=${quizID}&questionId=${questionId}`
        );
        // console.log("questionsOptions=", res.data);
        setOptions(res.data);
      } catch (error) {
        console.log("Error=", error.message);
      }
    };
    getOptions();
  }, [questionId, quizID]);

  const handleAnswerSelection = (item) => {
    setSelectedOption(item);
  };
  // console.log("selected answer=", selectedOption);

  const handelAnswerSubmittion = async () => {
    let url = `https://printful.com/test-quiz.php?action=submit&quizId=${quizID}`;
    for (let i = 0; i <= selectedQuestionIndex; i++) {
      if (i === selectedQuestionIndex) {
        url = url + `&answers[]=${selectedOption.id}`;
      } else {
        url = url + `&answers[]=`;
      }
    }
    try {
      const res = await axios.get(url);

      dispatch(updateScore(res.data));

      // console.log("resSubmittion=", res.data);
    } catch (error) {
      console.log("error=", error.message);
    }
    // console.log("url=", url);
  };

  const handelNextOpearations = async () => {
    await handelAnswerSubmittion();
    setSelectedOption(null);
    dispatch(nextQuestion());
  };

  return (
    <div>
      Single Question {questionId} {question}
      {options.length > 0 && (
        <ul>
          {options.map((element) => {
            return (
              <p onClick={() => handleAnswerSelection(element)}>
                {element.id} {element.title}
              </p>
            );
          })}
        </ul>
      )}
      <button
        onClick={() => {
          handelNextOpearations();
        }}
        disabled={!selectedOption}
      >
        Next
      </button>
    </div>
  );
};

export default SingleQuestion;
