import { useDrag } from "react-dnd";
import { CardType } from "../interface/Card.ts";

type UseCardDnDParams = {
	card: CardType | undefined;
	order: number;
};

export type DragResult = {
	card: CardType;
	oldOrder: number;
};

export type DropResult = {
	boardId: string;
	order: number;
};

export function useCardDrag({ card, order }: UseCardDnDParams) {
	if (!card) {
		throw new Error("card is required for useCardDnD");
	}

	return useDrag<DragResult, DropResult>(
		() => ({
			type: "CARD",
			item: { card, oldOrder: order },
			end: (item, monitor) => {
				const dropResult = monitor.getDropResult();
				if (item && dropResult) {
					const { card, oldOrder } = item;
					console.log("card", card);
					console.log("oldOrder", oldOrder);
					console.log("dropResult", dropResult);
				}
			},
			collect: (monitor) => ({
				opacity: monitor.isDragging() ? 0.5 : 1,
				boxShadow: monitor.isDragging() ? undefined : "none",
			}),
		}),
		[],
	);
}
