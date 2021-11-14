import {
  INITIALIZE_FROM_SESSION,
  INPUT_EXAMINEE_DETAILS,
  NEXT_QUESTION,
  SET_ERROR_FLAG,
  SET_QUESTION_LENGTH,
  STOP_TEST,
  UPDATE_SCORE,
} from "./actions";

export const initialState = {
  examineeName: "",
  selectedQuiz: {},
  noOfQuestions: 0,
  selectedQuestion: 0,
  result: {
    correct: 0,
    total: 0,
  },
  testCompletion: false,
  error: false,
};

const makeEntryInSessionStorage = (state) => {
  const stateTemp = sessionStorage.getItem("ultimate_quiz");
  if (stateTemp) {
    sessionStorage.removeItem("ultimate_quiz");
  }
  sessionStorage.setItem("ultimate_quiz", JSON.stringify(state));
};

const deleteFromSession = () => {
  sessionStorage.removeItem("ultimate_quiz");
};

export const quizDataReducer = (state = initialState, action) => {
  if (action.type === INPUT_EXAMINEE_DETAILS) {
    makeEntryInSessionStorage({
      ...state,
      examineeName: action.userData.examineeName,
      selectedQuiz: action.userData.selectedQuiz,
    });
    return {
      ...state,
      examineeName: action.userData.examineeName,
      selectedQuiz: action.userData.selectedQuiz,
    };
  } else if (action.type === SET_QUESTION_LENGTH) {
    return {
      ...state,
      noOfQuestions: action.number,
    };
  } else if (action.type === STOP_TEST) {
    sessionStorage.removeItem("ultimate_quiz");
    return {
      ...initialState,
    };
  } else if (action.type === NEXT_QUESTION) {
    if (state.selectedQuestion === state.noOfQuestions - 1) {
      makeEntryInSessionStorage({ ...state, testCompletion: true });
      deleteFromSession();
      return {
        ...state,
        testCompletion: true,
        selectedQuestion: state.selectedQuestion + 1,
      };
    } else {
      makeEntryInSessionStorage({
        ...state,
        selectedQuestion: state.selectedQuestion + 1,
      });
      return {
        ...state,
        selectedQuestion: state.selectedQuestion + 1,
      };
    }
  } else if (action.type === UPDATE_SCORE) {
    return {
      ...state,
      result: {
        correct:
          action.result.correct > 0
            ? state.result.correct + 1
            : state.result.correct,
        total: action.result.total,
      },
    };
  } else if (action.type === INITIALIZE_FROM_SESSION) {
    return { ...action.data, error: false };
  } else if (action.type === SET_ERROR_FLAG) {
    return {
      ...state,
      error: action.flag,
    };
  }
};
