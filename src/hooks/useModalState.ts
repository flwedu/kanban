import { useRecoilState } from "recoil";
import { AvailableModals, ModalState } from "../state/Modal";

/**
 * Hook para gerenciar o estado de um modal.
 * @param modalName O nome do modal a ser gerenciado.
 * @returns Um objeto contendo as propriedades dataId, isOpen, open e close.
 */
export function useModalState(modalName: AvailableModals){
	const [modalState, setModalState] = useRecoilState(ModalState);

	const isOpen = modalState.modalName === modalName;
	const dataId = modalState.dataId;

	const open = (dataId: string) => setModalState({
		modalName,
		dataId,
	});
	const close = () => setModalState({
		modalName: null,
		dataId: null,
	});

	return { isOpen, dataId, open, close };
}
