import {
  INITIALIZE_FROM_SESSION,
  INPUT_EXAMINEE_DETAILS,
  NEXT_QUESTION,
  SET_ERROR_FLAG,
  SET_QUESTION_LENGTH,
  STOP_TEST,
  UPDATE_SCORE,
} from "./actions";

export const inputExamineeDetails = (userData) => ({
  type: INPUT_EXAMINEE_DETAILS,
  userData,
});

export const setQuestionsLength = (number) => ({
  type: SET_QUESTION_LENGTH,
  number,
});

export const stopTest = () => ({
  type: STOP_TEST,
});

export const nextQuestion = () => ({
  type: NEXT_QUESTION,
});

export const updateScore = (result) => ({
  type: UPDATE_SCORE,
  result,
});

export const initializeFromSession = (data) => ({
  type: INITIALIZE_FROM_SESSION,
  data,
});

export const setErrorFlag = (flag) => ({
  type: SET_ERROR_FLAG,
  flag,
});
