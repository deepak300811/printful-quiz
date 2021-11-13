import React, { useState, useEffect } from "react";

import axios from "axios";
import Select from "react-select";
import { useStore } from "../../Store";
import { inputExamineeDetails } from "../../Store/QuizDataReducer";
import {
  StyledFormContainer,
  Form,
  Label,
  Heading,
  Error,
  StyledButton,
} from "./styles";
const InputForm = () => {
  const [, dispatch] = useStore();
  const [quizCategories, setQuizCategories] = useState([]);
  const [selectedOption, setSelectOption] = useState({
    value: 0,
    label: "Please Select Quiz",
  });
  const [examineeName, setExamineeName] = useState("");
  const [isExinameeNameInvalid, setExinameeNameInvalid] = useState(false);
  const [isQuizSelectionInvalid, setquizSelectionInvalid] = useState(false);
  const [isMounted, setIsMounted] = useState(true);
  useEffect(() => {
    if (isMounted) {
      const getCategoriesData = async () => {
        try {
          const res = await axios.get(
            "https://printful.com/test-quiz.php?action=quizzes&__cf_chl_jschl_tk__=wjQimVmsJWpKszU_.7C0cpM_vDatRFSB2WNBIIWHkNk-1636661108-0-gaNycGzNDD0"
          );
          console.log("daa=", res.data);
          const list = res.data.map((item) => {
            return {
              value: item.id,
              label: item.title,
            };
          });
          setQuizCategories(list);
        } catch (error) {
          console.log("error=", error.message);
        }
      };

      getCategoriesData();
    }
  }, [isMounted]);

  useEffect(() => () => setIsMounted(false));

  const handleQuizSelection = (selectedOption) => {
    setquizSelectionInvalid(false);
    setSelectOption(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExinameeNameInvalid(true);
    setquizSelectionInvalid(true);
    if (selectedOption.value !== 0) {
      setquizSelectionInvalid(false);
    }
    if (examineeName && examineeName.length > 2) {
      setExinameeNameInvalid(false);
    }
    if (!isQuizSelectionInvalid && !isExinameeNameInvalid) {
      dispatch(
        inputExamineeDetails({
          examineeName: examineeName,
          selectedQuiz: {
            id: selectedOption.value,
            title: selectedOption.label,
          },
        })
      );
    }
  };

  const handelExinameeName = (e) => {
    if (e.target.value.length < 2) {
      setExinameeNameInvalid(true);
    } else {
      setExinameeNameInvalid(false);
    }
    setExamineeName(e.target.value.trim());
  };

  return (
    <StyledFormContainer>
      {quizCategories.length > 0 && (
        <Form>
          <Heading>EXAMINEE DETAILS</Heading>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-6">
              <Label>EXINAMEE NAME</Label>
              <input
                type="text"
                value={examineeName}
                placeholder="Please Enter Name"
                className="p-3.5 bg-gray-200 rounded-lg  w-full "
                onChange={(e) => handelExinameeName(e)}
              ></input>
              {isExinameeNameInvalid && <Error>Please enter name</Error>}
            </div>
            <div className="mb-10">
              <Label>SELECT QUIZ</Label>

              <Select
                className=" bg-gray-200 rounded-lg  w-full "
                classNamePrefix="custom-select	"
                value={selectedOption}
                onChange={handleQuizSelection}
                options={quizCategories}
                placeholder="Please Select Any Quiz Type"
                isSearchable={false}
              />

              {isQuizSelectionInvalid && <Error>Please select quiz</Error>}
            </div>
            <StyledButton
              type="submit"
              className=" p-4  w-full lg:w-auto px-4 md:px-6 "
            >
              START QUIZ
            </StyledButton>
          </form>
        </Form>
      )}
    </StyledFormContainer>
  );
};

export default InputForm;