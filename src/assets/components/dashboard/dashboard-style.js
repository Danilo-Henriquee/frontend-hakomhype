import { styled } from 'styled-components';

export const Panel = styled.div`
  background-color: white;
  border-radius: 10px;
  height: 90%;
  margin: 50px;
  padding: 30px;

  min-height: 800px;

  label {
    font-size: 20px;
  }

  th {
    padding: 20px 0px 20px 0px;
    text-align: left;
  }

  h1 {
    color: gray;
  }

  button {
    margin-right: auto;
  }
`;

export const Row = styled.tr`
  align-items: center;
  height: 32px;

  .manage {
    margin-right: 15px;
    cursor: pointer;
  }
`;

export const Column = styled.td`
  padding: 0px 50px 10px 0px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin: 10px 0px 10px 0px;
`;