import styled from "styled-components";

const UserInputStyled = styled.input`
  width: 210px;
  padding: 12px;
  font-size: 16px;
  margin-right: 8px;
  border: 2px solid ${({ theme }) => theme.colors.main};
  border-radius: 18px;
`;

export default UserInputStyled;
