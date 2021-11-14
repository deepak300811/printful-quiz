import axios from "axios";
import React, { useEffect, useState } from "react";
import { useStore } from "../../Store";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  nextQuestion,
  setErrorFlag,
  updateScore,
} from "../../Store/actionCreators";
import Error from "../../Components/Error";
import {
  Question,
  SingleQuestionContainer,
  Option,
  OptionGrid,
  AnswerSubmit,
  FlexCenter,
  OptionText,
  RadioInnerCircle,
  RadioOuterCircle,
} from "./styles";

const SingleQuestion = ({
  questionId,
  question,
  quizID,
  selectedQuestionIndex,
}) => {
  const [options, setOptions] = useState([]);
  const [globalState, dispatch] = useStore();
  const [selectedOption, setSelectedOption] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getOptions = async () => {
      dispatch(setErrorFlag(false));
      try {
        const res = await axios.get(
          `https://printful.com/test-quiz.php?action=answers&quizId=${quizID}&questionId=${questionId}`
        );
        setOptions(res.data);
      } catch (error) {
        console.log("Error=", error.message);
        dispatch(setErrorFlag(true));
      }
    };
    getOptions();
  }, [questionId, quizID, dispatch]);

  const handleAnswerSelection = (item) => {
    setSelectedOption(item);
  };

  const handelAnswerSubmittion = async () => {
    setLoading(true);
    dispatch(setErrorFlag(false));
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
      setLoading(false);
      setSelectedOption(null);
      dispatch(nextQuestion());
    } catch (error) {
      console.log("error=", error.message);
      setLoading(false);
      setSelectedOption(null);
      dispatch(setErrorFlag(true));
    }
  };

  const handelNextOpearations = async () => {
    setOptions([]);
    await handelAnswerSubmittion();
  };

  const SkeletonLoading = (
    <>
      <Skeleton className="option" />
      <Skeleton className="option" />
      <Skeleton className="option" />
      <Skeleton className="option" />
    </>
  );

  return (
    <SingleQuestionContainer>
      <div className="flex ">
        <Question>
          <strong className="mr-1"> Q{selectedQuestionIndex + 1}.</strong>
        </Question>
        <div className="w-full md:w-auto">
          <Question className="mb-6 md:mb-8">{question}</Question>
          <OptionGrid>
            {options.length > 0 ? (
              options.map((element) => {
                return (
                  <Option
                    onClick={() => handleAnswerSelection(element)}
                    key={element.id}
                  >
                    <FlexCenter>
                      <RadioOuterCircle>
                        {selectedOption?.id === element.id && (
                          <RadioInnerCircle />
                        )}
                      </RadioOuterCircle>
                      <OptionText> {element.title}</OptionText>
                    </FlexCenter>
                  </Option>
                );
              })
            ) : !globalState.error ? (
              SkeletonLoading
            ) : (
              <Error />
            )}
          </OptionGrid>

          <AnswerSubmit
            onClick={() => {
              handelNextOpearations();
            }}
            className={
              !selectedOption || loading
                ? "opacity-50  hover:bg-green-600 cursor-not-allowed"
                : ""
            }
            disabled={!selectedOption || loading}
          >
            Next
          </AnswerSubmit>
        </div>
      </div>
    </SingleQuestionContainer>
  );
};

export default SingleQuestion;
