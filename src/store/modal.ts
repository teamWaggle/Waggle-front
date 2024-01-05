import { atom } from "recoil";

export type ModalProps = {
	key?: string;
	component?: () => JSX.Element;
};

export const modalState = atom<ModalProps[]>({
	key: "modalState",
	default: [],
});
