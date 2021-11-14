import React from "react";
import {
  ErrorIcon,
  ErrorInformativeText,
  StyledErrorContainer,
} from "./styles";
const Error = () => {
  return (
    <StyledErrorContainer>
      <ErrorIcon>
        <img src={window.location.origin + "/error.svg"} alt="error" />
      </ErrorIcon>
      <ErrorInformativeText>
        Something went wrong! <br /> Please try refreshing this page.
      </ErrorInformativeText>
    </StyledErrorContainer>
  );
};

export default Error;
