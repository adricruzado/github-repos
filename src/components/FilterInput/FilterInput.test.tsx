import { screen, render } from "@testing-library/react";
import { vi } from "vitest";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import GlobalStyle from "../../styles/GlobalStyle";
import FilterInput from "./FilterInput";

describe("Given a FilterInput component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the placeholder 'Filter by name'", () => {
      const expectedInputPlaceholder = "Filter by name";
      const onFilterMock = vi.fn();

      render(
        <ThemeProvider theme={mainTheme}>
          <GlobalStyle />
          <FilterInput
            placeholder={expectedInputPlaceholder}
            onFilterChange={onFilterMock}
          />
        </ThemeProvider>
      );

      const input = screen.getByPlaceholderText(expectedInputPlaceholder);

      expect(input).toBeInTheDocument();
    });
  });
});
