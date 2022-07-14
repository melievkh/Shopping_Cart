import styled from 'styled-components';
import colors from '../../assets/color/colors';
import mobile from '../../assets/media/media';

export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background-color: ${colors.bgColor};
  box-sizing: border-box;
  padding: 40px 220px;
  gap: 40px;
  ${mobile}{
    padding: 10px;
    gap: 10px;
    justify-content: space-evenly;
  }
`;

export const Card = styled.div`
  width: 270px;
  height: 360px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  ${mobile} {
    width: 190px;
    height: 240px;
  }
`;

export const CardMedia = styled.img`
  width: 96%;
  height: 240px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 6px;
`;

export const CardDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 14px;
  box-sizing: border-box;
`;
