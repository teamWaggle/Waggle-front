import { atom } from "recoil";

import { ModalType } from "@/types/modal";

export const modalState = atom<ModalType[]>({
	key: "modalState",
	default: [],
});
