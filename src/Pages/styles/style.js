import styled from 'styled-components';
import FlexBox from '../../components/Flexbox/FlexBox';

export const Wrapper = styled(FlexBox)`
  width: 100%;
  height: 160vh;
  margin-top: 50px;
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    gap: 60px;
    justify-content: center;
  }
`;
export const Card = styled(FlexBox)`
  width: 300px;
  height: 420px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  img {
    width: 90%;
    height: 60%;
    border-radius: 8px;
    margin: 8px;
  }
`;

export const CardDetails = styled(FlexBox)`
  width: 100%;
  height: 40%;
  button {
    width: 100%;
    height: 40px;
    border: none;
    background-color: rgb(40, 40, 120);
    color: white;
    border-radius: 4px;
    &:hover {
      background-color: rgb(40, 40, 100);
      transition: 0.3s;
    }
  }
`;
