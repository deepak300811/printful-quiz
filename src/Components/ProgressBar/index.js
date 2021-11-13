import React, { useEffect, useState } from "react";
import { useStore } from "../../Store";

const ProgressBar = () => {
  const [globalState] = useStore();
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    const percentageCompleted = Math.round(
      (globalState.selectedQuestion / globalState.noOfQuestions) * 100
    );
    setPercentage(percentageCompleted);
  }, [globalState]);
  return (
    <div className="relative pt-1 mt-4">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span
            className="
            inline-block
            py-1
            px-2
            rounded-full
            text-white
            bg-green-700	
            
            text-xs
            "
            // uppercase
          >
            {globalState.selectedQuestion} out of {globalState.noOfQuestions}{" "}
            answered
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-white">
            {percentage}% Completed
          </span>
        </div>
      </div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200	">
        <div
          style={{ width: `${percentage}%` }}
          className="
              shadow-none
              flex flex-col
              text-center
              whitespace-nowrap
              text-white
              justify-center
              bg-green-700	
            "
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;