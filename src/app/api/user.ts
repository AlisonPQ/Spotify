import { User } from "../models/user";
import { fetchClient } from "./fetchService";

async function getUserProfileFromService(token: string) {
  try {
    const userProfile:User = await fetchClient(token, "/me", "GET");
    return userProfile;
  } catch (error) {
    console.error("Failed to fetch user profile:", error);
  }
}

export { getUserProfileFromService };
