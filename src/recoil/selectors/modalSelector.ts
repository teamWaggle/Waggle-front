import { selector } from "recoil";

import { scheduleModalState } from "@/recoil/atoms/modal";

import type { ModalType } from "@/types/modal";

export const scheduleModalSelector = selector<ModalType[]>({
	key: "scheduleModalSelector",
	get: ({ get }) => {
		return get(scheduleModalState);
	},
	set: ({ set }, newValue) => {
		set(scheduleModalState, newValue);
	},
});
