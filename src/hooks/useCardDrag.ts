import { useDrag } from "react-dnd";
import { useRecoilCallback } from "recoil";
import { CardType } from "../interface/Card.ts";
import { BoardSelectorById, BoardsAtom } from "../state/Board.ts";
import { CardsAtom } from "../state/Cards.ts";

type UseCardDnDParams = {
	card: CardType | undefined;
	order: number;
};

/**
 * Draggable card hook for handling card drag and drop.
 *
 * @param {Object} params - The parameters object.
 * @param {Object} params.card - The card that is being dragged.
 * @param {number} params.order - The current order of the card.
 *
 * @throws {Error} If `card` parameter is missing.
 *
 * @returns The drag object with drag and drop functionality.
 */
export function useCardDrag({ card, order: oldOrder }: UseCardDnDParams) {
	if (!card) {
		throw new Error("card is required for useCardDnD");
	}

	const moveCard = useRecoilCallback(
		({ set, transact_UNSTABLE: transact }) =>
			async (newBoardId: string, newOrder: number) => {
				// If the card is dropped in the same board, we only need to update the order
				if (card.boardId === newBoardId) {
					set(BoardSelectorById(newBoardId), (board) => {
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
				transact(({ set }) => {
					// Update boards
					set(BoardsAtom, (currVal) => {
						const newBoards = [...currVal];
						// 1. Remove the card from the old board
						const cardOldBoardIndex = newBoards.findIndex((b) => b.id === card.boardId);
						if (cardOldBoardIndex > -1) {
							const cardOldBoard = newBoards[cardOldBoardIndex];
							const cards = [...cardOldBoard.cards];
							cards.splice(oldOrder, 1);
							newBoards[cardOldBoardIndex] = { ...cardOldBoard, cards };
						}
						// 2. Add the card to the new board
						const cardNewBoardIndex = newBoards.findIndex((b) => b.id === newBoardId);
						if (cardNewBoardIndex > -1) {
							const cardNewBoard = newBoards[cardNewBoardIndex];
							const cards = [...cardNewBoard.cards];
							// if order === -1, it means the card should be moved to the end of the list
							if (newOrder === -1) {
								cards.push(card.id);
							} else {
								// Otherwise, we insert the card at the new position
								cards.splice(newOrder, 0, card.id);
							}
							newBoards[cardNewBoardIndex] = { ...cardNewBoard, cards };
						}
						return newBoards;
					});
					// Update the card's boardId
					set(CardsAtom, (currVal) => {
						const newCards = [...currVal];
						const updatedCardIndex = newCards.findIndex((c) => c.id === card.id);
						const updatedCard = newCards[updatedCardIndex];

						if (!updatedCard) return currVal;
						newCards[updatedCardIndex] = { ...updatedCard, boardId: newBoardId };
						return newCards;
					});
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
