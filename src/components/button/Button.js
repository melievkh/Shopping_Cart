import styled from 'styled-components';
import colors from '../../assets/color/colors';

const Button = styled.button`
  width: ${({ wd }) => wd || '100%'};
  height: ${({ hg }) => hg || '40px'};
  background-color: ${({ bgColor }) => bgColor || colors.bgColor};
  color: ${colors.blue};
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  &:hover {
    background-color: ${({ bgColor }) => bgColor || '#8f91cc'};
    transition: 0.3s;
  }
`;

export default Button;
