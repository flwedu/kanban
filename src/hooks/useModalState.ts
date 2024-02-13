import { useRecoilState } from "recoil";
import { AvailableModals, ModalState } from "../state/Modal";

type UseModalStateReturn = [
	{ isOpen: boolean; dataId: string | null },
	{
		open: (dataId: string) => void;
		close: () => void;
	},
];

/**
 * Hook to manage the state of a modal.
 *
 * @param {AvailableModals} modalName - The name of the modal to be managed.
 * @returns {UseModalStateReturn} - An array containing the properties dataId, isOpen, open, and close.
 */
export function useModalState(modalName: AvailableModals): UseModalStateReturn {
	const [modalState, setModalState] = useRecoilState(ModalState);

	const isOpen = modalState.modalName === modalName;
	const dataId = modalState.dataId;

	const open = (dataId: string) =>
		setModalState({
			modalName,
			dataId,
		});
	const close = () =>
		setModalState({
			modalName: null,
			dataId: null,
		});

	return [
		{ isOpen, dataId },
		{ open, close },
	] as const;
}
