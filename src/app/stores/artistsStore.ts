import { makeAutoObservable, runInAction } from "mobx";
import { Artist } from "../models/artist";
import { getArtistsFromService } from "../api/artist";

export default class ArtistStore {
  artists: Artist[] | undefined = [];
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getArtists = async (token: string) => {
    this.loading = true;
    try {
      const artists: Artist[] | undefined = await getArtistsFromService(token);
      runInAction(() => {
        this.artists = artists;
        this.loading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.loading = false;
      });
      console.error("Failed to fetch artists:", error);
    }
  }
}
