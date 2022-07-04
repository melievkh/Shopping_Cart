import styled from 'styled-components';
import colors from '../../assets/color/colors';

const Button = styled.button`
  width: ${({ wd }) => wd || '100%'};
  height: ${({ hg }) => hg || '40px'};
  background-color: ${({ bgColor }) => bgColor || colors.blue};
  color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  &:hover {
    background-color: ${({bgColor})=> bgColor || 'rgb(40, 40, 100)'};
    transition: 0.3s;
  }
`;

export default Button;
