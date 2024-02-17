import { atom } from "recoil";

import { ModalType, MoreModalType } from "@/types/modal";

export const modalState = atom<ModalType[]>({
	key: "modalState",
	default: [],
});

export const moreModalState = atom<MoreModalType>({
	key: "moreModalState",
	default: {
		day: null,
		// scheduleDay: null,
	},
});

export const scheduleModalState = atom<ModalType[]>({
	key: "scheduleModalState",
	default: [],
});
