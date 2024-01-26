import { SetterOrUpdater } from "recoil";
import { BoardType } from "../../interface/Board.ts";
import { CardType } from "../../interface/Card.ts";

interface StoreCardParams {
	setCardsFn: SetterOrUpdater<CardType[]>;
	setBoardFn: SetterOrUpdater<BoardType | undefined>;
	data: CardType;
}

export function storeCard({ setCardsFn, setBoardFn, data }: StoreCardParams) {
	setCardsFn((prevCards) => {
		return [data, ...prevCards];
	});

	setBoardFn((board) => {
		if (!board) return board;
		return {
			...board,
			cards: [...board.cards, data.id],
		};
	});
}
