import { useState } from "react";
import UserInputStyled from "./UserInputStyled";
import Button from "../Button/Button";

interface UserInputProps {
  onSearch: (username: string) => void;
}
const UserInput = ({ onSearch }: UserInputProps): React.ReactElement => {
  const [username, setUsername] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const user = event.target.value;

    setUsername(user);
  };

  const handleClick = () => {
    onSearch(username);
  };

  return (
    <>
      <UserInputStyled
        type="text"
        placeholder="Enter Github username"
        value={username}
        onChange={handleInputChange}
      />
      <Button text="Search" actionOnClick={handleClick} />
    </>
  );
};

export default UserInput;
