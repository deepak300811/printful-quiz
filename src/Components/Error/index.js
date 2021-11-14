import React from "react";
import tw from "tailwind-styled-components";
import styled from "styled-components";
const Error = () => {
  const ErrorContainer = tw.div`
    w-screen
    h-screen
    flex
    pt-40
    items-center
    flex-col
    absolute
    top-0
    left-0
    z-10	
    `;

  const StyledErrorContainer = styled(ErrorContainer)`
    background: #dc2625db;
  `;

  return (
    <StyledErrorContainer>
      <div className="w-6/12 lg:w-4/12 h-auto ">
        <img src={window.location.origin + "/error.svg"} alt="error" />
      </div>
      <p className="text-white text-center text-3xl leading-10 font-light md:font-normal	">
        Something went wrong! <br /> Please try refreshing this page.
      </p>
    </StyledErrorContainer>
  );
};

export default Error;
