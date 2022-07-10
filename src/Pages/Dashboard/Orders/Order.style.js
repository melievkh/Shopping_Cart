import styled from 'styled-components';
import colors from '../../../assets/color/colors';
import FlexBox from '../../../components/Flexbox/FlexBox';

export const Wrapper = styled(FlexBox)`
  width: 1180px;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${colors.bgColor};
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
    background-color: ${colors.white};
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
