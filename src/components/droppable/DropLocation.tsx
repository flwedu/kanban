import { Box } from "@mantine/core";
import type { HTMLAttributes, ReactElement } from "react";
import { useCardDrop } from "../../hooks/useCardDrop.ts";

export type DropLocationProps = {
	boardId: string;
	order: number;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Represents a drop location for cards on a board.
 * @param {DropLocationProps} props - The props for the drop location component.
 * @param {string} props.boardId - The ID of the board to which the drop location belongs.
 * @param {number} props.order - The order of the drop location within the board.
 * @returns {ReactElement} The rendered drop location component.
 */
export function DropLocation({ order, boardId }: DropLocationProps): ReactElement {
	const [{ isOver, canDrop }, dropRef] = useCardDrop({
		dropInfoGetter: () => ({ boardId, newOrder: order }),
	});

	return (
		<Box
			ref={dropRef}
			w="100%"
			style={{
				height: isOver && canDrop ? 80 : 20,
				opacity: isOver && canDrop ? 1 : 0,
				border: "dashed 1px gray",
				borderRadius: 4,
				marginBottom: isOver && canDrop ? 0 : -20,
			}}
		/>
	);
}
