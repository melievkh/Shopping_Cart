import styled from 'styled-components';
import colors from '../../assets/color/colors';
import FlexBox from '../../components/Flexbox/FlexBox';

export const DropdownContent = styled.div`
  width: 300px;
  height: 300px;
  display: none;
  position: absolute;
  border-radius: 8px;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  min-width: 160px;
  z-index: 1;
  ul{
    display: flex;
    flex-direction: column;
  }
`;

export const Dropdown = styled.div`
  color: white;
  font-size: 30px;
  margin-left: -50px;
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
  p {
    font-size: 25px;
    color: ${colors.white};
  }
  button {
    border: none;
    background-color: inherit;
    font-size: 25px;
  }
`;
export const ButtonsBox = styled(FlexBox)`
  width: 100%;
  height: 50%;
  p {
    font-size: 20px;
  }
  button {
    font-size: 25px;
    border: none;
    background-color: inherit;
  }
`;
