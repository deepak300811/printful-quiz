import React from "react";

const ProgressBar = ({ percentage, total, answered }) => {
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
            {answered} out of {total} answered
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-white">
            {percentage}%
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
