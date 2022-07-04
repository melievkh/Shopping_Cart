import styled from 'styled-components';
import colors from '../../assets/color/colors';
import FlexBox from '../../components/Flexbox/FlexBox';

export const DropdownContent = styled.div`
  width: 300px;
  height: 300px;
  display: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 8px;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  min-width: 160px;
  z-index: 1;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 5px;
  }
  li{
    margin: 0;
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

export const Cards = styled(FlexBox)`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(85, 110, 143, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
  border-radius: 8px;
`;
