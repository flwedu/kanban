import { SetterOrUpdater } from "recoil";
import { BoardType } from "../../interface/Board.ts";
import { CardType } from "../../interface/Card.ts";

interface StoreCardParams {
	setCardsFn: SetterOrUpdater<CardType[]>;
	setBoardsFn: SetterOrUpdater<BoardType[]>;
	data: CardType;
}

export function storeCard({ setCardsFn, setBoardsFn, data }: StoreCardParams) {
	setCardsFn((prevCards) => {
		return [data, ...prevCards];
	});

	setBoardsFn((prevBoards) => {
		return prevBoards.map((board) => {
			if (board.id !== data.boardId) {
				return board;
			}

			return {
				...board,
				cards: [...board.cards, data.id],
			};
		});
	});
}
