import { atom, selectorFamily } from "recoil";
import { BoardType } from "../interface/Board.ts";

export const BoardsAtom = atom<BoardType[]>({
	key: "BoardsAtom",
	default: [],
});

export const BoardSelectorById = selectorFamily<BoardType | undefined, string>({
	key: "BoardSelectorById",
	get:
		(id) =>
		({ get }) => {
			const boards = get(BoardsAtom);
			return boards.find((board) => board.id === id);
		},
});

export const BoardCardsSelectorById = selectorFamily<string[], string>({
	key: "BoardCardsSelectorById",
	get:
		(id) =>
		({ get }) => {
			const board = get(BoardSelectorById(id));
			return board?.cards || [];
		},
});
