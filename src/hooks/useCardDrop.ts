import { useDrop } from "react-dnd";

type UseBoardDropParams = {
	boardId: string;
	order: number;
};

export function useCardDrop({ boardId, order: newOrder }: UseBoardDropParams) {
	return useDrop(
		() => ({
			accept: "CARD",
			drop: (_, monitor) => {
				// check if the card drop event has already been handled
				if (monitor.didDrop()) return;
				return {
					boardId,
					newOrder,
				};
			},
			collect: (monitor) => ({
				isOver: monitor.isOver(),
				canDrop: monitor.canDrop(),
			}),
		}),
		[boardId, newOrder],
	);
}
