import React from "react";
import { Repository } from "../../services/types";
import RepositoryListStyled from "./RepositoryListStyled";

interface RepositoryListProps {
  repositories: Repository[];
}

const RepositoryList = ({
  repositories,
}: RepositoryListProps): React.ReactElement => {
  return (
    <RepositoryListStyled>
      {repositories.map((repository) => (
        <li key={repository.id}>
          <span>{repository.name}</span> - {repository.language}
        </li>
      ))}
    </RepositoryListStyled>
  );
};

export default RepositoryList;
