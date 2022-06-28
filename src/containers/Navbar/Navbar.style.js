import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  top: 0;
  background-color: rgb(40, 40, 100);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  h1 {
    font-family: cursive;
    color: rgb(200, 200, 200);
  }
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 60px;
    list-style-type: none;
    li {
      font-size: 20px;
      cursor: pointer;
      margin: 0;
      font-family: monospace;
      border-radius: 5px;
      color: white;
      &:hover {
        border-bottom: 1px solid white;
        transition: 0.2s;
        color: rgb(200, 200, 200);
      }
    }
  }
  a {
    text-decoration: none;
  }
`;


export default Wrapper;
