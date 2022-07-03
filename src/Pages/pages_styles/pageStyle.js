import styled from 'styled-components';
import FlexBox from '../../components/Flexbox/FlexBox';
import { media } from '../../assets/media/media';

export const Wrapper = styled(FlexBox)`
  width: 100%;
  height: auto;
  margin-top: 100px;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 30px;
  ul {
    height: 80%;
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    gap: 60px;
    justify-content: center;
  }
  ${media.lg} {
    height: auto;
    flex-direction: column;
  }
`;
export const Card = styled(FlexBox)`
  width: 300px;
  height: 420px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  ${media.md}{
    width: 260px;
    height: 380px;
  }
  ${media.sm}{
    width: 170px;
    height: 260px;
  }

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
`;
