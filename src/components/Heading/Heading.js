import styled, { css } from 'styled-components';
import colors from '../../assets/color/colors';
import { media } from '../../assets/media/media';
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
  font-family: ${({ fontFamily }) => fontFamily || `'Charis SIL', serif`};
  color: ${({ color }) => color || colors.black };
  text-indent: ${({ textIndent }) => textIndent};
  text-align: ${({ align }) => align || 'center'};
  margin: ${({margin})=> margin || 0};
  font-family: monospace;
  ${media.lg}{
    font-size: 20px;
  }
`;

export default Heading;
