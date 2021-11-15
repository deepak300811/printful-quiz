import tw from "tailwind-styled-components";
import styled from "styled-components";
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

export const StyledErrorContainer = styled(ErrorContainer)`
  background: #dc2625db;
`;

export const ErrorIcon = tw.div`
    w-6/12 
    md:5/12
    lg:w-80
    xl:w-96	
    h-auto `;

export const ErrorInformativeText = tw.p`
    text-white 
    text-center 
    text-3xl 
    leading-10 
    font-light 
    md:font-normal`;
