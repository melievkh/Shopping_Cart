import styled from 'styled-components';
import colors from '../../assets/color/colors';
import FlexBox from '../../components/Flexbox/FlexBox';

export const Wrapper = styled(FlexBox)`
  width: 30%;
  hr {
    width: 100%;
    height: 2px;
    border: none;
    background-image: linear-gradient
      (to right, rgba(75, 78, 150), cornflowerblue, rgba(75, 78, 150));
  }
`;

export const DropdownContent = styled.div`
  width: 280px;
  height: 320px;
  display: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 8px;
  background-color: ${colors.white};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  z-index: 1;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
  li {
    list-style-type: none;
  }
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

export const Name = styled(FlexBox)`
  width: 100%;
  height: 50%;
`;
export const ButtonsBox = styled(FlexBox)`
  width: 100%;
  height: 50%;
`;

export const Cards = styled(FlexBox)`
  margin-top: 8px;
  box-sizing: border-box;
`;
