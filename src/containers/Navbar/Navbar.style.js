import styled from 'styled-components';
import colors from '../../assets/color/colors';
import { media } from '../../assets/media/media';

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${colors.white};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  box-sizing: border-box;

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
  padding: 20px;
  z-index: 1;
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  flex-direction: row;
  &:hover ${DropdownContent} {
    display: block;
  }
`;
