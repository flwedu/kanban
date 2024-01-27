import { useCardDrop } from "../../hooks/useCardDrop.ts";
import { StyledDropLocation } from "./DropLocation.styles.tsx";

export type DropLocationProps = {
	boardId: string;
	order: number;
};

export function DropLocation(props: DropLocationProps) {
	const [{ isOver, canDrop }, dropRef] = useCardDrop(props);

	const className = isOver && canDrop ? "hovering" : "";

	return <StyledDropLocation ref={dropRef} className={className} />;
}
