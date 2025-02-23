import { makeAutoObservable, runInAction } from "mobx";
import { User } from "../models/user";
import { getUserProfileFromService } from "../api/user";

export default class UserStore {
  user: User | undefined = undefined;
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getUserProfile = async (token: string) => {
    this.loading = true;
    try {
      const userProfile: User | undefined = await getUserProfileFromService(token);
      runInAction(() => {
        this.user = userProfile;
        this.loading = false;
        console.log("User profile fetched:", this.user);
      });
    } catch (error) {
      runInAction(() => {
        this.loading = false;
      });
      console.error("Failed to fetch user profile:", error);
    }
  }

  
}
