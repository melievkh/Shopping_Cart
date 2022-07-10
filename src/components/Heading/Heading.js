import styled, { css } from 'styled-components';
import colors from '../../assets/color/colors';

const headingSize = {
  sm: css`
    font-size: 20px;
  `,
  md: css`
    font-size: 25px;
  `,
  lg: css`
    font-size: 30px;
  `,
};

const Heading = styled.h1`
  ${({ size }) => headingSize[size || 'sm']};
  color: ${({ secondary }) => (secondary ? colors.blue : colors.black)};
  text-align: ${({ align }) => align || 'center'};
  margin: ${({ margin }) => margin || 0};
  font-family: monospace;
`;

export default Heading;
