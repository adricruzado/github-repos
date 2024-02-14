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
        <li className="repository" key={repository.id}>
          <span className="repository__name">{repository.name}</span>
          <span className="repository__language">{repository.language}</span>
        </li>
      ))}
    </RepositoryListStyled>
  );
};

export default RepositoryList;
