import styled from 'styled-components';
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
`;

export const Card = styled.div`
  width: 280px;
  height: fit-content;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: ${colors.white};
`;

export const CardMedia = styled.img`
  width: 100%;
  height: 240px;
  border-radius: 8px;
`;

export const CardDetails = styled.div`
  width: 100%;
  height: fit;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 20px;
  box-sizing: border-box;
`;
