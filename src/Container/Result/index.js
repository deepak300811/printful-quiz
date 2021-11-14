import React from "react";
import tw from "tailwind-styled-components";
import { useStore } from "../../Store";
import { Container } from "../../styles/Global/GenericComponents";
import ProgressBar from "../../Components/ProgressBar";
const ResultContainer = tw(Container)`
bg-gray-800
h-screen	
w-screen
pt-12
px-8
 flex
 flex-col
 items-center
 
`;

const Result = () => {
  const [globalState] = useStore();
  return (
    <ResultContainer>
      <div className=" w-32 md:w-48 h-auto mb-8 md:mb-16 mx-auto">
        <img
          src={window.location.origin + "/resultIcon.svg"}
          alt="result-icon"
        />
      </div>
      <div className="py-6 px-4 sm:px-6 md:px-10 border rounded-2xl text-xl md:text-2xl w-full md:w-10/12	lg:w-8/12		 	">
        <p className="text-gray-100	">
          Thanks, <strong>{globalState.examineeName} </strong>  🎉{" "}
        </p>
        <p className="text-gray-100">
          You responded correctly to{" "}
          <strong> {globalState.result.correct}</strong> out of{" "}
          <strong> {globalState.result.total} </strong> questions.
        </p>
        <ProgressBar />
      </div>
    </ResultContainer>
  );
};

export default Result;
