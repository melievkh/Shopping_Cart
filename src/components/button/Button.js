import styled from 'styled-components';
import colors from '../../assets/color/colors';

const Button = styled.button`
  width: ${({ wd }) => wd || '100%'};
  height: ${({ hg }) => hg || '35px'};
  background-color: ${({ bgColor }) => bgColor || colors.bgColor};
  border: ${({ border }) => border || 'none'};
  color: ${colors.blue};
  font-weight: 600;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${({ bgColor }) => bgColor || '#8f91cc'};
    transition: 0.3s;
  }
`;

export default Button;
