import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import { useStore } from "../../Store";
import { stopTest } from "../../Store/actionCreators";
import {
  FlexBox,
  StyledBrand,
  Tooptip,
  HeaderContainer,
  HeaderOtherText,
  StopButton,
  UserDetails,
  UserIcon,
} from "./styles";

const QuizHeader = () => {
  const [showToolTip, setShowTooptip] = useState(false);
  const [globalState, dispatch] = useStore();
  const handleStop = () => {
    dispatch(stopTest());
  };

  return (
    <HeaderContainer>
      <FlexBox>
        <StyledBrand>Printful .</StyledBrand>
        <HeaderOtherText>
          <UserIcon className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onMouseOver={() => setShowTooptip(true)}
              onMouseLeave={() => setShowTooptip(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>{" "}
            {showToolTip && (
              <Tooptip>
                <UserDetails>
                  <strong className="mr-1">Name </strong>
                  <span className="leading-5"> {globalState.examineeName}</span>

                  <strong>Quiz</strong>
                  <span> {globalState.selectedQuiz.title}</span>
                </UserDetails>
              </Tooptip>
            )}
          </UserIcon>
          <UserIcon>|</UserIcon>
          <StopButton onClick={() => handleStop()}> Stop Test</StopButton>
        </HeaderOtherText>
      </FlexBox>
      <ProgressBar />
    </HeaderContainer>
  );
};

export default QuizHeader;
