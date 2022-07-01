import styled from 'styled-components';
import colors from '../../assets/color/colors';
import { media } from '../../assets/media/media';

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  top: 0;
  background-color: ${colors.blue};
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
    gap: 60px;
    list-style-type: none;
    ${media.lg}{
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
      ${media.lg}{
        font-size: 15px;
      }
    }
  }
  a {
    text-decoration: none;
  }

  ${media.lg}{
    height: 70px;
  }
`;

export default Wrapper;
