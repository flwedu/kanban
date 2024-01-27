import { useDrop } from "react-dnd";

type UseBoardDropParams = {
	boardId: string;
};

export function useCardDrop({ boardId }: UseBoardDropParams) {
	return useDrop(
		() => ({
			accept: "CARD",
			drop: (item) => item,
			collect: (monitor) => ({
				isOver: monitor.isOver(),
				canDrop: monitor.canDrop(),
			}),
		}),
		[boardId],
	);
}
