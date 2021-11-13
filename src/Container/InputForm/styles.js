import tw from "tailwind-styled-components";
import Styled from "styled-components";

const FormContainer = tw.div`
h-screen
w-screen
flex
justify-center
items-center
`;

export const StyledFormContainer = Styled(FormContainer)`
 background: linear-gradient(45deg,  rgba(66, 183, 245,0.8) 0%,rgba(66, 245, 189,0.4) 100%);
`;
export const Form = tw.div`
w-10/12
md:w-6/12
p-12
md:p-16
bg-white
rounded-lg	
`;

export const Heading = Styled.p`
color: #4285F4;
font-size: 1.5rem;
font-weight:500;
margin-bottom:1.5rem;
`;

export const Label = tw.p`
text-sm text-gray-600	pb-2
`;

export const StyledButton = Styled.button`
    background:#4285F4;
    color: #fff;
    border-radius: 5px;
    font-weight:500;
`;

export const Error = tw.p`
  mt-1
  pl-1
  text-red-500	
  text-sm
  italic
`;
