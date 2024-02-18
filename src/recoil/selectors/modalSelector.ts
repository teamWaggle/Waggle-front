import { selector } from "recoil";

import { moreModalState, scheduleModalState } from "@/recoil/atoms/modal";

import type { ModalType, MoreModalStateType } from "@/types/modal";

export const moreModalSelector = selector<MoreModalStateType>({
	key: "moreModalSelector",
	get: ({ get }) => {
		return get(moreModalState);
	},
	set: ({ set }, newValue) => {
		set(moreModalState, newValue);
	},
});

export const scheduleModalSelector = selector<ModalType[]>({
	key: "scheduleModalSelector",
	get: ({ get }) => {
		return get(scheduleModalState);
	},
	set: ({ set }, newValue) => {
		set(scheduleModalState, newValue);
	},
});
