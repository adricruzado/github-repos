import styled from "styled-components";

const UserCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.accent};
  font-family: ${({ theme }) => theme.typography.mainFont};
  color: #fff;
  border-radius: 30px;
  width: 280px;
  height: 400px;
  box-shadow: 0 0 15px ${({ theme }) => theme.colors.accent};
  padding: 5px;
  margin: 20px;

  .user-card__avatar {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    margin-bottom: 10px;
    border: 2px solid;
  }

  .user-card__name {
    margin-bottom: 10px;
  }

  .user-card__username {
    margin-bottom: 20px;
  }

  .user-card__description {
    width: 220px;
    text-align: center;
  }
`;

export default UserCardStyled;
