import { useState } from "react";
import UserInput from "../UserInput/UserInput";

const App = (): React.ReactElement => {
  const [username, setUsername] = useState("");

  const handleSearch = (user: string) => {
    setUsername(user);
  };
  return (
    <>
      <UserInput onSearch={handleSearch}></UserInput>
      <p>Entered Github username: {username}</p>
    </>
  );
};

export default App;
