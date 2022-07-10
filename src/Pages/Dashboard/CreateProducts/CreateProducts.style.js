import styled from 'styled-components';
import colors from '../../../assets/color/colors';
import FlexBox from '../../../components/Flexbox/FlexBox';

export const Wrapper = styled(FlexBox)`
  flex-direction: row;
  width: fit-content;
  height: 100vh;
`;
export const Box = styled(FlexBox)`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  justify-content: space-evenly;

  textarea {
    width: 80%;
    height: 80px;
    outline: none;
    border-radius: 8px;
    border: none;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 0px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 1px 2px;
    text-indent: 10px;
    resize: none;
  }
`;
