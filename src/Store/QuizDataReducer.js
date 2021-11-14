export const INPUT_EXAMINEE_DETAILS = "ADD_USER_DETAILS";
export const SET_QUESTION_LENGTH = "SET_QUESTIONS_LENGTH";
export const STOP_TEST = "STOP_TEST";
export const NEXT_QUESTION = "NEXT_QUESTION";
export const UPDATE_SCORE = "UPDATE_SCORE";
export const INITIALIZE_FROM_SESSION = "INITIALIZE_FROM_SESSION";
export const SET_ERROR_FLAG = "SET_ERROR_FLAG";
export const initialState = {
  examineeName: "",
  selectedQuiz: {},
  // questions: [],
  noOfQuestions: 0,
  selectedQuestion: 0,
  // solvedQuestions: [],
  result: {
    correct: 0,
    total: 0,
  },
  testCompletion: false,
  error: false,
};

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
    console.log("reducdata=", action);
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
    console.log("questionsLENGTH", action);
    return {
      ...state,
      noOfQuestions: action.number,
    };
  } else if (action.type === STOP_TEST) {
    console.log("stop=", action);
    sessionStorage.removeItem("ultimate_quiz");
    return {
      ...initialState,
    };
  } else if (action.type === NEXT_QUESTION) {
    console.log("next option=", action, state);
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
    console.log("updatedscore=", action, state);
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
    console.log("initialization=", action);
    return { ...action.data, error: false };
  } else if (action.type === SET_ERROR_FLAG) {
    console.log("statewitherror=", state);
    return {
      ...state,
      error: action.flag,
    };
  }
};
