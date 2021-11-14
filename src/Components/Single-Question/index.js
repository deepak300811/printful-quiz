import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useStore } from "../../Store";
import {
  nextQuestion,
  setErrorFlag,
  updateScore,
} from "../../Store/QuizDataReducer";
import { Container } from "../../styles/Global/GenericComponents";
import tw from "tailwind-styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Error from "../../Components/Error";
const SingleQuestionContainer = styled(Container)`
  background: #f3f7f7;
  min-height: calc(100vh - 161px);
  margin-top: 155px;
`;

const Question = tw.p`
font
text-xl
md:text-2xl	
mr-1

`;

const OptionGrid = tw.ul`
grid
gap-6
grid-cols-1	
md:grid-cols-2	
pr-6
`;

const Option = tw.div`
flex
cursor-pointer
p-6
bg-gray-200	
rounded-lg
text-gray-800
hover:text-gray-100
hover:bg-gray-800
shadow
transition-colors	
duration-500	
`;

const AnswerSubmit = tw.button`
  mt-6  
  md:mt-10
  py-2
  px-8
  bg-green-600
  text-white
  inline-block
  rounded-lg
  ml-1
  cursor-pointer
  hover:bg-green-500
  disabled:opacity-50
  shadow-lg
`;

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
      setLoading(false);
      setSelectedOption(null);
      dispatch(setErrorFlag(true));
    }
  };

  const handelNextOpearations = async () => {
    setOptions([]);
    await handelAnswerSubmittion();
  };

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
                  <Option onClick={() => handleAnswerSelection(element)}>
                    <div className="flex items-center ">
                      <div className="w-8 h-8 rounded-full bg-white mr-4 flex items-center justify-center">
                        {selectedOption?.id === element.id && (
                          <div className="w-6 h-6 rounded-full bg-green-600 "></div>
                        )}
                      </div>
                      <p className="text-base md:text-lg"> {element.title}</p>
                    </div>
                  </Option>
                );
              })
            ) : !globalState.error ? (
              <>
                <Skeleton className="option" />
                <Skeleton className="option" />
                <Skeleton className="option" />
                <Skeleton className="option" />
              </>
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
