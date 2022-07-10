import styled from 'styled-components';
import colors from '../../assets/color/colors';
import FlexBox from '../../components/Flexbox/FlexBox';

export const Wrapper = styled(FlexBox)`
  width: 30%;
  hr {
    height: 1px;
    background-color: #d1d1d1;
    border: none;
  }
`;

export const DropdownContent = styled.div`
  width: 280px;
  height: fit-content;
  max-height: 350px;
  display: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 8px;
  background-color: ${colors.white};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  z-index: 1;
  padding: 10px 20px;
`;

export const Dropdown = styled.div`
  color: white;
  font-size: 30px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  &:hover ${DropdownContent} {
    display: block;
  }
`;

export const ProductsList = styled.div`
  height: 80%;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
`;
export const ButtonsContainer = styled(FlexBox)`
  width: 100%;
  height: 50%;
`;

export const Cards = styled.div`
  height: 70px;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  box-sizing: border-box;
`;
export const OrderButton = styled.div`
  height: 20%;
  display: flex;
  justify-content: space-evenly;
`;
