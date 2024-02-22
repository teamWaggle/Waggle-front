import { atom } from "recoil";

import type { ModalType } from "@/types/modal";

export const modalState = atom<ModalType[]>({
	key: "modalState",
	default: [],
});

export const scheduleModalState = atom<ModalType[]>({
	key: "scheduleModalState",
	default: [],
});

export const tempModalState = atom<boolean>({
	key: "tempModalState",
	default: false,
});
