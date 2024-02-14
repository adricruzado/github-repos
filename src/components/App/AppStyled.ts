import styled from "styled-components";

const AppStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .app__title {
    margin-top: 50px;
    margin-left: 20px;
    text-align: center;
  }

  @media (min-width: 768px) {
    .app__container {
      display: flex;
      flex-direction: row;
      margin: 20px;
      gap: 100px;
    }
  }
`;

export default AppStyled;
