import { screen, render } from "@testing-library/react";
import { vi } from "vitest";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import GlobalStyle from "../../styles/GlobalStyle";
import UserInput from "./UserInput";

describe("Given a UserInput component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the placeholder 'Enter Github username'", () => {
      const expectedInputPlaceholder = "Enter Github username";
      const onSearchMock = vi.fn();

      render(
        <ThemeProvider theme={mainTheme}>
          <GlobalStyle />
          <UserInput onSearch={onSearchMock} />
        </ThemeProvider>
      );

      const input = screen.getByPlaceholderText(expectedInputPlaceholder);

      expect(input).toBeInTheDocument();
    });
  });
});
