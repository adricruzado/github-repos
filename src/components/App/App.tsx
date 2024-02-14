import { useEffect, useState } from "react";
import UserInput from "../UserInput/UserInput";
import { Repository, UserDetails } from "../../services/types";
import {
  getUserDetails,
  getUserRepositories,
} from "../../services/githubService";
import RepositoryList from "../RepositoryList/RepositoryList";
import UserCard from "../UserCard/UserCard";
import AppStyled from "./AppStyled";

const App = (): React.ReactElement => {
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  useEffect(() => {
    const handleSearch = async () => {
      if (username !== "") {
        try {
          const [userData, repoData] = await Promise.all([
            getUserDetails(username),
            getUserRepositories(username),
          ]);

          setUserDetails(userData);
          setRepositories(repoData);
        } catch (error) {
          console.error("Error fetching data:", error);
          setUserDetails(null);
          setRepositories([]);
        }
      } else {
        setUserDetails(null);
        setRepositories([]);
      }
    };

    handleSearch();
  }, [username]);

  return (
    <AppStyled>
      <h1 className="app__title">Welcome to Github Repos!</h1>
      <UserInput onSearch={setUsername} />
      <div className="app__container">
        <UserCard userDetails={userDetails} />
        <RepositoryList repositories={repositories} />
      </div>
    </AppStyled>
  );
};

export default App;
