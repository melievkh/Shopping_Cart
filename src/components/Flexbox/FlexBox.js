import styled from 'styled-components';

const FlexBox = styled.div`
  display: flex;
  flex-direction: ${({flexDirection}) => flexDirection || 'column' };
  justify-content: ${({justifyContent})=> justifyContent || 'center'};
  align-items: ${({alignItems})=> alignItems || 'center'};
  flex-wrap: ${({flexWrap})=> flexWrap};
  gap: ${({gap})=> gap};
  width: ${({width})=> width};
  height: ${({height})=> height};
`;

export default FlexBox;
