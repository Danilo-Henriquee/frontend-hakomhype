import { styled } from 'styled-components'

export const Bar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: gray;
  gap: 30px;
  .icons {
    display: flex;
    height: 50px;
    width: 50px;

    color: black;
    transition: 0.2s;
  }

  .icons:hover {
    transform: scale(1.1);
  }
`;