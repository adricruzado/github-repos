import { styled } from "styled-components";

const FilterContainer = styled.div`
  margin-left: 45px;
  margin-bottom: 25px;

  @media (min-width: 768px) {
    display: flex;
    gap: 15px;
    margin-left: 35px;
  }
`;

export default FilterContainer;
