import styled from "styled-components";

const ButtonStyled = styled.button`
  width: 6rem;
  height: 3rem;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 20px;
  border: 3px solid black;
`;

export default ButtonStyled;
