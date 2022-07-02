import styled from 'styled-components';
import colors from '../../assets/color/colors';
import FlexBox from '../../components/Flexbox/FlexBox';

export const Wrapper = styled(FlexBox)`
  width: 100%;
  height: 100vh;
`;

export const Box = styled.form`
  width: 350px;
  height: 450px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 4px;
  input {
    width: 80%;
    height: 25px;
    border: none;
    outline: none;
    border-bottom: 1px solid ${colors.black};
    border-radius: 8px;
    text-indent: 8px;
    &:focus{
        border-bottom: 1px solid ${colors.blue};
    }
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
`;
