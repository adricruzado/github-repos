import { useState } from "react";
import FilterInputStyled from "./FilterInputStyled";

interface FilterInputProps {
  placeholder: string;
  onFilterChange: (filter: string) => void;
}

const FilterInput = ({
  placeholder,
  onFilterChange,
}: FilterInputProps): React.ReactElement => {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFilter = event.target.value;

    setFilter(newFilter);
    onFilterChange(newFilter);
  };

  return (
    <FilterInputStyled
      type="text"
      placeholder={placeholder}
      value={filter}
      onChange={handleFilterChange}
    />
  );
};

export default FilterInput;
