import styled, { css } from 'styled-components';
import colors from '../../assets/color/colors';
import mobile from '../../assets/media/media';

const headingSize = {
  sm: css`
    font-size: 16px;
    ${mobile} {
      font-size: 12px;
    }
  `,
  md: css`
    font-size: 18px;
    ${mobile} {
      font-size: 12px;
    }
  `,
  lg: css`
    font-size: 22px;
    ${mobile} {
      font-size: 18;
    }
  `,
};

const Heading = styled.h1`
  ${({ size }) => headingSize[size || 'md']};
  color: ${({ secondary }) => (secondary ? colors.blue : colors.heading)};
  text-align: ${({ align }) => align || 'center'};
  margin: ${({ margin }) => margin || 0};
  font-family: monospace;
`;

export default Heading;
