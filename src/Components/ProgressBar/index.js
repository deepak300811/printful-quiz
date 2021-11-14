import React, { useEffect, useState } from "react";
import { useStore } from "../../Store";
import AnimatedNumber from "animated-number-react";

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
            md:text-sm
            "
          >
            {globalState.selectedQuestion} out of {globalState.noOfQuestions}{" "}
            answered
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs md:text-sm font-semibold inline-block text-white ">
            <AnimatedNumber
              value={isNaN(percentage) ? 0 : percentage}
              formatValue={(value) => Math.round(value)}
            />
            % Completed
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
              transition-all	
              duration-1000 ease-in-out
            "
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
