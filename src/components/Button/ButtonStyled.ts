import styled from "styled-components";

const ButtonStyled = styled.button`
  width: 96px;
  height: 48px;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  background-color: #f0f8ff;
  border-radius: 20px;
  border: 3px solid ${({ theme }) => theme.colors.accent};
`;

export default ButtonStyled;
