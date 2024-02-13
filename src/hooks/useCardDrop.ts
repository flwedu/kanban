import { useDrop } from "react-dnd";

type UseBoardDropParams = {
	dropInfoGetter: () => {
		boardId: string;
		newOrder: number;
	};
};

/**
 * Custom hook for handling card drop events.
 *
 * @param {Object} params - Parameters for the card drop hook.
 * @param {Function} params.dropInfoGetter - A function that returns the drop information.
 *
 * @return An object containing the collected drop information.
 */
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
