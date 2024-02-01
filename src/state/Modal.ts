import { atom } from "recoil";

export type AvailableModals = "board" | "config" | "card";
type ModalStateType = {
	modalName: AvailableModals | null;
	dataId: string | null;
};

export const ModalState = atom<ModalStateType>({
	key: "ModalState",
	default: {
		modalName: null,
		dataId: null,
	},
});
