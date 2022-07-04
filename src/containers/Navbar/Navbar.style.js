import styled from 'styled-components';
import { media } from '../../assets/media/media';

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
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
  gap: 20px;
  position: absolute;
  z-index: 1;

  input{
    width: 300px;
    height: 30px;
    outline: none;
    border-radius: 8px 0 0 8px;
    border: none;
    text-indent: 5px;
  }
  ${media.lg} {
    height: 70px;
  }
`;

export default Wrapper;
