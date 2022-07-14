import styled from 'styled-components';
import colors from '../../assets/color/colors';
import mobile from '../../assets/media/media';

const Button = styled.button`
  width: ${({ wd }) => wd || '100%'};
  height: ${({ hg }) => hg || '35px'};
  background-color: ${({ bgColor }) => bgColor || colors.button};
  border: ${({ border }) => border || 'none'};
  color: ${colors.blue};
  font-weight: 600;
  font-size: 16px;
  display: flex;
  justify-content: ${({justifyContent})=> justifyContent || 'center'};
  align-items: center;
  gap: 4px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  cursor: pointer;

  &:hover {
    background-color: ${({ bgColor }) => bgColor || '#8f91cc'};
    transition: 0.3s;
  }
  ${mobile} {
    height: 22px;
  }
`;

export default Button;
