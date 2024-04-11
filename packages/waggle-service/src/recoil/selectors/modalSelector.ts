import { selector } from "recoil";

import { modalState, scheduleModalState } from "@/recoil/atoms/modal";

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
