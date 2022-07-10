import styled from 'styled-components';
import colors from '../../assets/color/colors';
import { media } from '../../assets/media/media';

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  top: 0;
  background-color: ${colors.white};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  position: absolute;
  z-index: 1;

  input {
    width: 300px;
    height: 30px;
    outline: none;
    border-radius: 8px 0 0 8px;
    background-color: ${colors.bgColor};
    border: none;
    text-indent: 5px;
  }
  ${media.lg} {
    height: 70px;
  }
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  border-radius: 4px;
  min-width: 100px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 12px 16px;
  z-index: 1;
`;
export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${DropdownContent} {
    display: block;
  }
`;
