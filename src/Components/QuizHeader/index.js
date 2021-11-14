import React, { useState } from "react";
import tw from "tailwind-styled-components";
import styled from "styled-components";
import ProgressBar from "../ProgressBar";
import { useStore } from "../../Store";
import { stopTest } from "../../Store/QuizDataReducer";
import { Container } from "../../styles/Global/GenericComponents";
export const HeaderContainer = tw(Container)`
bg-gray-800
shadow-2xl
pb-4
absolute
top-0	
left-0		
`;

export const Brand = tw.p`
text-white	
text-3xl	
leading-12
  `;

export const StyledBrand = styled(Brand)`
  font-family: "Pacifico", cursive;
  color: #e0e0e0;
  @media (max-width: 500px) {
    font-size: 1.6rem;
  }
`;

export const HeaderOtherText = tw.span`
  flex
  items-center
`;
export const FlexBox = tw.div`
flex
justify-between	
items-center
`;

export const UserIcon = tw.div`
cursor-pointer	
text-white
text-3xl
relative
`;

export const StopButton = tw.div`
text-white
text-base
bg-red-600	
hover:bg-red-500
py-1
px-3
rounded-lg
cursor-pointer
ml-2	
z-20
`;

export const Tooptip = styled.div`
  font-size: 0.8rem;
  background: #c6c6c6;
  color: #000;
  position: absolute;
  top: 105%;
  right: 0%;
  width: 150px;
  padding: 0.5rem 0.5rem;
  line-height: 1rem;
  border-radius: 5px;
  z-index: 2;
  line-height: 1.4;

  @media (min-width: 767px) {
    font-size: 1rem;

    width: 200px;
  }
`;

export const UserDetails = styled.div`
  display: grid;
  grid-template-columns: 48px 1fr;
  grid-row-gap: 0.3rem;
`;

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
