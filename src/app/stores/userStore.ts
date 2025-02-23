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
    try {
      const user = await getUserProfileFromService(token);
      runInAction(() => {
        this.user = user;
      });
    } catch (error) {
      console.log(error);
    }
  }
}
