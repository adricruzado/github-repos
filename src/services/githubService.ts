import axios from "axios";
import { Repository } from "./types";

const GITHUB_API_BASE_URL = "https://api.github.com";

export const getUserRepositories = async (
  username: string
): Promise<Repository[]> => {
  try {
    const response = await axios.get(
      `${GITHUB_API_BASE_URL}/users/${username}/repos`,
      {
        headers: {
          Authorization:
            "Bearer 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",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching repositories:", error);
    throw error;
  }
};
