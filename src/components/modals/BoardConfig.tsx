import { useRef } from "react";
import { useRecoilState } from "recoil";
import { useModalState } from "../../hooks/useModalState";
import { BoardSelectorById } from "../../state/Board";
import { Button } from "../common/Button.styles.tsx";
import { ColorPicker } from "../common/ColorPicker.tsx";
import { FormRow, Label } from "../common/Form.styles.tsx";
import {
	StyledModal,
	StyledModalContent,
	StyledModalFooter,
	StyledModalHeader,
	StyledModalWrapper,
} from "./Modal.styles";

export function BoardConfigModal() {
	const { isOpen, dataId, close } = useModalState("board");
	const [boardState, setBoardState] = useRecoilState(BoardSelectorById(dataId ?? ""));
	const formRef = useRef<HTMLFormElement>(null);

	const onClickSave = () => {
		if (!formRef?.current) return;
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
		<StyledModalWrapper>
			<StyledModal>
				<StyledModalHeader>
					<h3>Board Configuration</h3>
				</StyledModalHeader>
				<StyledModalContent>
					<form ref={formRef}>
						<FormRow>
							<Label htmlFor="color">Board color:</Label>
							<ColorPicker name="color" defaultValue={boardState?.color} />
						</FormRow>
					</form>
				</StyledModalContent>
				<StyledModalFooter>
					<Button onClick={onClickSave}>Save</Button>
					<Button onClick={onClickCancel}>Cancel</Button>
				</StyledModalFooter>
			</StyledModal>
		</StyledModalWrapper>
	);
}
