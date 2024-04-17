import { selector } from "recoil";

import { modalState, scheduleModalState, teamInfoModalState } from "@/recoil/atoms/modal";

import type { ModalType } from "@/types/modal";

export const scheduleModalSelector = selector<ModalType[]>({
  key: "scheduleModalSelector",
  get: ({ get }) => get(scheduleModalState),
  set: ({ set }, newValue) => {
    set(scheduleModalState, newValue);
  },
});

export const modalSelector = selector<ModalType[]>({
  key: "modalSelector",
  get: ({ get }) => get(modalState),
  set: ({ set }, newValue) => {
    set(modalState, newValue);
  },
});

export const teamInfoModalSelector = selector<ModalType[]>({
  key: "teamInfoModalSelector",
  get: ({ get }) => get(teamInfoModalState),
  set: ({ set }, newValue) => {
    set(teamInfoModalState, newValue);
  },
});
