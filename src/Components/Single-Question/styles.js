import { Container } from "../../styles/Global/GenericComponents";
import tw from "tailwind-styled-components";
import styled from "styled-components";

export const SingleQuestionContainer = styled(Container)`
  background: #f3f7f7;
  min-height: calc(100vh - 161px);
  margin-top: 155px;
`;

export const Question = tw.p`
font
text-xl
md:text-2xl	
mr-1

`;

export const OptionGrid = tw.ul`
grid
gap-6
grid-cols-1	
md:grid-cols-2	
pr-6
`;

export const Option = tw.div`
flex
cursor-pointer
p-6
bg-gray-200	
rounded-lg
text-gray-800
hover:text-gray-100
hover:bg-gray-800
shadow
transition-colors	
duration-500	
`;

export const AnswerSubmit = tw.button`
  mt-6  
  md:mt-10
  py-2
  px-8
  bg-green-600
  text-white
  inline-block
  rounded-lg
  ml-1
  cursor-pointer
  hover:bg-green-500
  disabled:opacity-50
  shadow-lg
`;

export const FlexCenter = tw.div`
flex
items-center `;

export const RadioOuterCircle = tw.div`
w-8
h-8 
rounded-full 
bg-white 
mr-4 
flex 
items-center 
justify-center
`;

export const RadioInnerCircle = tw.div`
w-6 
h-6 
rounded-full 
bg-green-600 `;

export const OptionText = tw.div`
text-base
md:text-lg`;
