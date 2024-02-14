import { screen, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import GlobalStyle from "../../styles/GlobalStyle";
import RepositoryList from "./RepositoryList";
import { mockRepositories } from "../../mocks/mockRepositories";

describe("Given a RepositoryList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a list with 'Hoteling' and 'Trendflix' repositories", () => {
      render(
        <ThemeProvider theme={mainTheme}>
          <GlobalStyle />
          <RepositoryList repositories={mockRepositories} />
        </ThemeProvider>
      );

      const hotelingRepository = screen.getByText("Hoteling");
      const trendflixRepository = screen.getByText("Trendflix");

      expect(hotelingRepository).toBeInTheDocument();
      expect(trendflixRepository).toBeInTheDocument();
    });
  });
});
