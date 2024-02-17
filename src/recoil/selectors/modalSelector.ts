import { selector } from "recoil";

import { moreModalState, scheduleModalState } from "@/recoil/atoms/modal";
import { ModalType, MoreModalType } from "@/types/modal";

export const moreModalSelector = selector<MoreModalType>({
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
