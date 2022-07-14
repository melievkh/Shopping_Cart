import styled from 'styled-components';

export const Form = styled.form`
  width: 350px;
  height: fit-content;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-evenly;
  padding: 20px 25px;

  textarea {
    width: 100%;
    height: 80px;
    outline: none;
    border-radius: 8px;
    border: none;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 0px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 1px 2px;
    text-indent: 10px;
    resize: none;
  }
  svg{
    font-size: 24px;
  }
`;
