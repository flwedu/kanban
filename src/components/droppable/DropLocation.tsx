import type { HTMLAttributes, ReactElement } from "react";
import { useCardDrop } from "../../hooks/useCardDrop.ts";
import { StyledDropLocation } from "./DropLocation.styles.tsx";

export type DropLocationProps = {
	boardId: string;
	order: number;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Represents a drop location for cards on a board.
 * @param {DropLocationProps} props - The props for the drop location component.
 * @param {string} props.boardId - The ID of the board to which the drop location belongs.
 * @param {number} props.order - The order of the drop location within the board.
 * @param {string} props.className - The additional CSS class name for the drop location.
 * @returns {ReactElement} The rendered drop location component.
 */
export function DropLocation({ order, className, boardId }: DropLocationProps): ReactElement {
	const [{ isOver, canDrop }, dropRef] = useCardDrop({
		dropInfoGetter: () => ({ boardId, newOrder: order }),
	});

	const usedClassName = isOver && canDrop ? "hovering" : className;

	return <StyledDropLocation ref={dropRef} className={usedClassName} />;
}
