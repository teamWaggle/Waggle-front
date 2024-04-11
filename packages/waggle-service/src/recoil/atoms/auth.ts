import { atom } from "recoil";

export const isLoggedInState = atom({
  key: "isLoggedIn",
  default: false,
});

export const memberIdState = atom({
  key: "memberId",
  default: 0,
});
