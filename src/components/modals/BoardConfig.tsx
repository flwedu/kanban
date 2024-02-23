import { Button, ColorPicker, Divider, Group, Stack, Text } from "@mantine/core";
import { Check, Trash, X } from "lucide-react";
import { ReactElement, useState } from "react";
import { useRecoilState } from "recoil";
import { BoardSelectorById } from "../../state/Board";
import { colorsRef } from "../../theme/colorsRef.ts";

const colorOptions = Object.values(colorsRef).map((c) => c["500"]);

interface BoardConfigModalProps {
	boardId: string;
	onClose: () => void;
	onRemoveBoard: () => void;
}

/**
 * Renders a modal for configuring a board.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.onRemoveBoard - The callback function to remove the board.
 * @param {string} props.boardId - The ID of the board.
 * @param {Function} props.onClose - The callback function to close the modal.
 *
 * @returns {ReactElement} The rendered modal component.
 */
export function BoardConfigPopoverContent({ onRemoveBoard, boardId, onClose }: BoardConfigModalProps): ReactElement {
	const [boardState, setBoardState] = useRecoilState(BoardSelectorById(boardId));
	const [formState, setFormState] = useState({
		color: boardState?.color,
	});

	const onClickSave = () => {
		const color = formState["color"];
		if (!boardState) return;
		setBoardState((currVal) => {
			if (!currVal) return currVal;
			return {
				...currVal,
				color,
			};
		});
		onClose();
	};

	const onChangeColor = (color: string) => {
		setFormState({ ...formState, color });
	};

	return (
		<Stack>
			<Text>Board Color:</Text>
			<div style={{ width: "100%", height: "2rem", background: formState.color, borderRadius: 4 }} />
			<ColorPicker
				format="hex"
				swatches={colorOptions}
				onChange={onChangeColor}
				value={formState.color}
				withPicker={false}
			/>
			<Divider />
			<Text>Danger zone</Text>
			<Button onClick={onRemoveBoard} color="red">
				<Trash /> Remove Board
			</Button>
			<Divider />
			<Group justify="space-between">
				<Button onClick={onClickSave} color="green">
					<Check /> Save
				</Button>
				<Button onClick={onClose} color="gray">
					<X /> Cancel
				</Button>
			</Group>
		</Stack>
	);
}
