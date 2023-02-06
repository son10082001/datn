import { atom, selector } from "recoil";
import { STORAGE_KEY } from "../utils/constants";
import { localStorageEffect } from "../utils/sideEffect";

const userInfo = atom({
  key: "useInfo",
  default: {},
  effects: [localStorageEffect(STORAGE_KEY.user)],
});

const accessToken = atom({
  key: "accessToken",
  default: {},
  effects: [localStorageEffect(STORAGE_KEY.token)],
});

const checkLogin = selector({
  key: "checkLogin",
  get: ({ get }) => {
    const user = get(userInfo);
    if (typeof document !== "undefined") {
      if (user !== null && Object.keys(user).length !== 0) {
        return true;
        // setSelf(JSON.parse(savedValue));
      }
      return false;
    }
  },
});

export { checkLogin, userInfo, accessToken };
