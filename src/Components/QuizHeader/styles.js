import tw from "tailwind-styled-components";
import styled from "styled-components";
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
