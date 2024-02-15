import React, { useState } from "react";
import { Repository } from "../../services/types";
import RepositoryListStyled from "./RepositoryListStyled";
import FilterInput from "../FilterInput/FilterInput";
import FilterContainer from "../FilterContainer/FilterContainer";

interface RepositoryListProps {
  repositories: Repository[];
}

const RepositoryList = ({
  repositories,
}: RepositoryListProps): React.ReactElement => {
  const [nameFilter, setNameFilter] = useState("");
  const [languageFilter, setLanguageFilter] = useState("");

  const handleNameFilterChange = (filter: string) => {
    setNameFilter(filter);
  };

  const handleLanguageFilterChange = (filter: string) => {
    setLanguageFilter(filter);
  };

  const filteredRepositories = repositories.filter((repo) => {
    const matchesName = (repo.name || "")
      .toLowerCase()
      .includes(nameFilter.toLowerCase());
    const matchesLanguage = (repo.language || "")
      .toLowerCase()
      .includes(languageFilter.toLowerCase());
    return matchesName && matchesLanguage;
  });

  return (
    <>
      <div>
        <FilterContainer>
          {repositories.length > 0 ? (
            <>
              <FilterInput
                placeholder="Filter by name"
                onFilterChange={handleNameFilterChange}
              />
              <FilterInput
                placeholder="Filter by language"
                onFilterChange={handleLanguageFilterChange}
              />
            </>
          ) : null}
        </FilterContainer>

        <RepositoryListStyled>
          {filteredRepositories.map((repository) => (
            <li className="repository" key={repository.id}>
              <span className="repository__name">{repository.name}</span>
              <span className="repository__language">
                {repository.language}
              </span>
            </li>
          ))}
        </RepositoryListStyled>
      </div>
    </>
  );
};

export default RepositoryList;
