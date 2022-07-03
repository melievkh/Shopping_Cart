import styled from 'styled-components';
import colors from '../../assets/color/colors';
import { media } from '../../assets/media/media';

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  top: 0;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(85, 110, 143, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  z-index: 1;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 30px;
    list-style-type: none;
    ${media.lg} {
      gap: 20px;
    }
    li {
      font-size: 20px;
      cursor: pointer;
      margin: 0;
      font-family: monospace;
      border-radius: 5px;
      color: white;
      &:hover {
        border-bottom: 1px solid white;
        transition: 0.2s;
        color: ${colors.grey};
      }
      ${media.lg} {
        font-size: 15px;
      }
    }
  }
  a {
    text-decoration: none;
  }

  ${media.lg} {
    height: 70px;
  }
`;

export default Wrapper;
