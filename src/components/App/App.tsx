import { useEffect, useState } from "react";
import UserInput from "../UserInput/UserInput";
import { Repository } from "../../services/types";
import { getUserRepositories } from "../../services/githubService";
import RepositoryList from "../RepositoryList/RepositoryList";

const App = (): React.ReactElement => {
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    const handleSearch = async () => {
      try {
        if (username !== "") {
          const data = await getUserRepositories(username);
          setRepositories(data);
        } else {
          setRepositories([]);
        }
      } catch (error) {
        console.error("Error fetching repositories:", error);
        throw error;
      }
    };

    handleSearch();
  }, [username]);

  return (
    <>
      <UserInput onSearch={setUsername} />
      <RepositoryList repositories={repositories} />
    </>
  );
};

export default App;
