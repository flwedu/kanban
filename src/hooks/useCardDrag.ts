import { useDrag } from "react-dnd";
import { useRecoilCallback } from "recoil";
import { CardType } from "../interface/Card.ts";
import { BoardSelectorById } from "../state/Board.ts";
import { CardSelectorById } from "../state/Cards.ts";

type UseCardDnDParams = {
	card: CardType | undefined;
	order: number;
};

export function useCardDrag({ card, order: oldOrder }: UseCardDnDParams) {
	if (!card) {
		throw new Error("card is required for useCardDnD");
	}

	const moveCard = useRecoilCallback(
		({ set }) =>
			async (boardId: string, newOrder: number) => {
				// If the card is dropped in the same board, we only need to update the order
				if (card.boardId === boardId) {
					set(BoardSelectorById(boardId), (board) => {
						if (!board) return board;
						const newCards = [...board.cards];
						newCards.splice(oldOrder, 1);
						// if order === -1, it means the card should be moved to the end of the list
						if (newOrder === -1) {
							newCards.push(card.id);
							return { ...board, cards: newCards };
						}
						// Otherwise, we insert the card at the new position
						newCards.splice(newOrder, 0, card.id);
						return { ...board, cards: newCards };
					});
					return;
				}
				// If the card is dropped in a different board, we need to:
				// 1. Remove the card from the old board
				set(BoardSelectorById(card.boardId), (board) => {
					if (!board) return board;
					const newCards = [...board.cards];
					newCards.splice(oldOrder, 1);
					return { ...board, cards: newCards };
				});
				// 2. Add the card to the new board
				set(BoardSelectorById(boardId), (board) => {
					if (!board) return board;
					const newCards = [...board.cards];
					// if order === -1, it means the card should be moved to the end of the list
					if (newOrder === -1) {
						newCards.push(card.id);
						return { ...board, cards: newCards };
					}
					// Otherwise, we insert the card at the new position
					newCards.splice(newOrder, 0, card.id);
					return { ...board, cards: newCards };
				});
				// 3. Update the card's boardId
				set(CardSelectorById(card.id), (oldCard) => {
					if (!oldCard) return oldCard;
					return { ...oldCard, boardId };
				});
			},
		[card.id],
	);

	return useDrag(
		() => ({
			type: "CARD",
			end: async (item, monitor) => {
				const dropResult = monitor.getDropResult<{ boardId: string; newOrder: number }>();
				if (item && dropResult) {
					await moveCard(dropResult.boardId, dropResult.newOrder);
				}
			},
			collect: (monitor) => ({
				isDragging: monitor.isDragging(),
			}),
		}),
		[],
	);
}
