import { styled } from "styled-components";

const RepositoryListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
  margin: 10px;
  margin-bottom: 20px;

  .repository {
    height: 80px;
    background-color: #f0f8ff;
    border: 1px solid ${({ theme }) => theme.colors.accent};
    padding: 10px;
    border-radius: 5px;
  }

  .repository__name {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 5px;
    display: block;
  }

  .repository__language {
    color: ${({ theme }) => theme.colors.accent};
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default RepositoryListStyled;
