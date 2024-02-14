import { screen, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import GlobalStyle from "../../styles/GlobalStyle";
import UserCard from "./UserCard";
import { mockUser } from "../../mocks/mockUser";

describe("Given a UserCard component", () => {
  const userDetails = mockUser;
  const userName = mockUser.name;
  describe("When it receives a 'John Carter' user", () => {
    test("Then it should show the text 'John Carter' in a heading", () => {
      render(
        <ThemeProvider theme={mainTheme}>
          <GlobalStyle />
          <UserCard userDetails={userDetails} />
        </ThemeProvider>
      );

      const userCard = screen.getByRole("heading", {
        name: userName,
      });

      expect(userCard).toBeInTheDocument();
    });

    test("Then it should show an image with the alternative text 'John Carter'", () => {
      render(
        <ThemeProvider theme={mainTheme}>
          <GlobalStyle />
          <UserCard userDetails={userDetails} />
        </ThemeProvider>
      );

      const image = screen.getByAltText(userName);

      expect(image).toBeInTheDocument();
    });
  });
});
