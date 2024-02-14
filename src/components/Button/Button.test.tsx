import { screen, render } from "@testing-library/react";
import Button from "./Button";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import GlobalStyle from "../../styles/GlobalStyle";

describe("Given a Button component", () => {
  describe("When it receives a text 'search'", () => {
    test("Then it should show the text 'search'", () => {
      const expectedButtonText = "search";

      render(
        <ThemeProvider theme={mainTheme}>
          <GlobalStyle />
          <Button text={expectedButtonText} />
        </ThemeProvider>
      );

      const button = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(button).toBeInTheDocument();
    });
  });
});
