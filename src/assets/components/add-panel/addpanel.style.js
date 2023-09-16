import styled from "styled-components"

export const Container = styled.div`
  background-color: gray;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #bdbdbd;
    width: 65%;
    height: 70%;
    border-radius: 10px;
  }

  form {
    width: 80%;
    height: 80%;
  }

  label {
    display: block;
    margin-bottom: 45px;
  }

  input, select {
    display: block;
    font-size: 20px;
    width: 100%;
    height: 50px;
    border-style: none;
    border-radius: 15px;
    padding-left: 15px;
    padding-right: 15px;
  }

  button {
    display: flex;
    justify-content: center;
    border-radius: 10px;
    border: 1px solid;
    height: 50px;
    font-size: 20px;
    align-items: center;
    width: 100%;
  }


`;
