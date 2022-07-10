import styled from 'styled-components';
import { media } from '../../assets/media/media';
import colors from '../../assets/color/colors';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background-color: ${colors.bgColor};
  box-sizing: border-box;
  padding: 40px 140px;
  gap: 30px;

  ${media.lg} {
    height: auto;
    flex-direction: column;
  }
`;

export const Card = styled.div`
  width: 280px;
  height: fit-content;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: ${colors.white};

  ${media.md} {
    width: 260px;
    height: 380px;
  }
  ${media.sm} {
    width: 170px;
    height: 260px;
  }
`;

export const CardMedia = styled.img`
  width: 100%;
  height: 240px;
  border-radius: 8px;
`;

export const CardDetails = styled.div`
  width: 100%;
  height: fit;
  padding: 20px;
  box-sizing: border-box;
`;
