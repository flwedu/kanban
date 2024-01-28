import { useDrop } from "react-dnd";

type UseBoardDropParams = {
	dropInfoGetter: () => {
		boardId: string;
		newOrder: number;
	};
};

export function useCardDrop({ dropInfoGetter }: UseBoardDropParams) {
	return useDrop(
		() => ({
			accept: "CARD",
			drop: (_, monitor) => {
				// check if the card drop event has already been handled
				if (monitor.didDrop()) return;
				return dropInfoGetter();
			},
			collect: (monitor) => ({
				isOver: monitor.isOver(),
				canDrop: monitor.canDrop(),
			}),
		}),
		[dropInfoGetter],
	);
}
