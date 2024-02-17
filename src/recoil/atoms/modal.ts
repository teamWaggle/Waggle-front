import { atom } from "recoil";

import { ModalType, MoreModalStateType } from "@/types/modal";

export const modalState = atom<ModalType[]>({
	key: "modalState",
	default: [],
});

export const moreModalState = atom<MoreModalStateType>({
	key: "moreModalState",
	default: {
		day: null,
	},
});

export const scheduleModalState = atom<ModalType[]>({
	key: "scheduleModalState",
	default: [],
});
