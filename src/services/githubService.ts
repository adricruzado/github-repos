import axios from "axios";
import { Repository, UserDetails } from "./types";

const GITHUB_API_BASE_URL = "https://api.github.com";

export const getUserRepositories = async (
  username: string
): Promise<Repository[]> => {
  try {
    const response = await axios.get(
      `${GITHUB_API_BASE_URL}/users/${username}/repos`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching repositories:", error);
    throw error;
  }
};

export const getUserDetails = async (
  username: string
): Promise<UserDetails> => {
  const response = await axios.get(`${GITHUB_API_BASE_URL}/users/${username}`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_TOKEN}`,
    },
  });
  return response.data;
};
