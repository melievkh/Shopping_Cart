import styled from 'styled-components';
import colors from '../../../styles/color/colors';

export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Table = styled.table`
  width: 80%;
  height: auto;
  border-collapse: collapse;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  th {
    padding: 0 10px;
    height: 40px;
    font-weight: 700;
    font-size: 16px;
    border: 1px solid grey;
    background-color: ${colors.bgColor};
    color: #f3f3f3;
  }
  td {
    padding: 2px 10px;
    border: 1px solid grey;
    font-size: 14px;
    font-weight: 600;
  }
  tr {
    background-color: white;
    &:nth-child(even) {
      background-color: #f3f3f3;
    }
  }
`;
