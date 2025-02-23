import { Artist } from "../models/artist";
import { fetchClient } from "./fetchService";

async function getArtistsFromService(token: string) {
  try {
    const artists:Artist[] = await fetchClient(token, "/me/top/artists", "GET")
                                      .then((response) => response.items);
    return artists;
  } catch (error) {
    console.error("Failed to fetch artists:", error);
  }
}

export { getArtistsFromService };
