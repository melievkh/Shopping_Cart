import styled from 'styled-components';
import colors from '../../assets/color/colors';
import mobile from '../../assets/media/media';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #fafafa;
  align-items: center;
  gap: 20px;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  svg {
    color: ${colors.avatar};
  }
  ${mobile} {
    width: auto;
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

export const SearchInput = styled(Input)`
  border: none;
  background-color: ${colors.bgColor};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  &:focus {
    border: 1px solid #5ca5ed;
  }
  ${mobile} {
    width: 160px;
    height: 22px;
  }
`;

export const RegisterButton = styled(Button)`
  &:hover {
    background-color: ${({ bgColor }) => bgColor || '#dfe7f5'};
  }
  ${mobile} {
    display: none;
  }
`;
