import React from 'react'
import { useCardDrop } from "../../hooks/useCardDrop.ts";
import { StyledDropLocation } from "./DropLocation.styles.tsx";

export type DropLocationProps = {
	boardId: string;
	order: number;
} & React.HTMLAttributes<HTMLDivElement>;

export function DropLocation(props: DropLocationProps) {
	const [{ isOver, canDrop }, dropRef] = useCardDrop({
		dropInfoGetter: () => ({ boardId: props.boardId, newOrder: props.order }),
	});

	const className = isOver && canDrop ? "hovering" : props.className;

	return <StyledDropLocation ref={dropRef} className={className} />;
}
