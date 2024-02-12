import { Check, Trash, X } from "lucide-react";
import { useRef } from "react";
import { useRecoilState } from "recoil";
import { useModalState } from "../../hooks/useModalState";
import { BoardSelectorById } from "../../state/Board";
import { Button } from "../common/Button.tsx";
import { ColorPicker } from "../common/ColorPicker.tsx";
import { FormRow } from "../common/Form.styles.tsx";
import {
	StyledModal,
	StyledModalContent,
	StyledModalFooter,
	StyledModalHeader,
	StyledModalWrapper,
} from "./Modal.styles";

interface BoardConfigModalProps {
	onRemoveBoard: (boardId: string) => void;
}

export function BoardConfigModal({ onRemoveBoard }: BoardConfigModalProps) {
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

	const onClickRemove = () => {
		if(!dataId) return;
		onRemoveBoard(dataId);
		close();
	}

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
							<ColorPicker name="color" defaultValue={boardState?.color} />
						</FormRow>
						<FormRow>
							<Button danger onClick={onClickRemove}>
								<Trash /> Remove Board
							</Button>
						</FormRow>
					</form>
				</StyledModalContent>
				<StyledModalFooter>
					<Button success onClick={onClickSave}>
						<Check/>
						Save
					</Button>
					<Button onClick={onClickCancel} secondary>
						<X/>
						Cancel
					</Button>
				</StyledModalFooter>
			</StyledModal>
		</StyledModalWrapper>
	);
}
