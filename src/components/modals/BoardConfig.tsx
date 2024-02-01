import { useRecoilState } from "recoil";
import { Button } from "../../components/common/Button.styles";
import { useModalState } from "../../hooks/useModalState";
import { useRef } from "react";
import { BoardSelectorById } from "../../state/Board";
import { StyledModal, StyledModalContent, StyledModalFooter, StyledModalHeader } from "./Modal.styles";

export function BoardConfigModal() {
	const { isOpen, dataId, close } = useModalState("board");
	const [boardState, setBoardState] = useRecoilState(BoardSelectorById(dataId ?? ""));
	const formRef = useRef<HTMLFormElement>(null);

	const onClickSave = () => {
		if (!formRef.current) return;
		const formData = new FormData(formRef.current);
		const color = formData.get("color");
		if (!boardState) return;
		setBoardState((currVal) => {
			if (!currVal) return currVal;
			return {
				...currVal,
				color: color as string,
			};
		});
		close();
	};
	const onClickCancel = () => {
		close();
	};

	if (!isOpen) return null;

	return (
		<StyledModal>
			<StyledModalHeader>
				<h3>Board Configuration</h3>
			</StyledModalHeader>
			<StyledModalContent>
				<form ref={formRef}>
					<input type="color" name="color" defaultValue={boardState?.color}></input>
				</form>
			</StyledModalContent>
			<StyledModalFooter>
				<Button onClick={onClickSave}>
					Save
				</Button>
				<Button onClick={onClickCancel}>
					Cancel
				</Button>
			</StyledModalFooter>
		</StyledModal>
	);
}
