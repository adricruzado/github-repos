import axios from "axios";
import { Repository } from "./types";

const GITHUB_API_BASE_URL = "https://api.github.com";

export const getUserRepositories = async (
  username: string
): Promise<Repository[]> => {
  try {
    const response = await axios.get(
      `${GITHUB_API_BASE_URL}/users/${username}/repos`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching repositories:", error);
    throw error;
  }
};
