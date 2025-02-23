import { createContext, useContext } from "react";
import UserStore from "./userStore";
import ArtistStore from "./artistsStore";

interface Store {
  userStore: UserStore;
  artistStore: ArtistStore;
}

export const store: Store = {
  userStore: new UserStore(),
  artistStore: new ArtistStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
