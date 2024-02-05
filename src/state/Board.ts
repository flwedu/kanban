import { atom, selectorFamily } from "recoil";
import { BoardType } from "../interface/Board.ts";
import persistAtom from "./persist.ts";

export const BoardsAtom = atom<BoardType[]>({
	key: "BoardsAtom",
	default: [],
	effects_UNSTABLE: [persistAtom],
});

export const BoardSelectorById = selectorFamily<BoardType | undefined, string>({
	key: "BoardSelectorById",
	get:
		(id) =>
		({ get }) => {
			const boards = get(BoardsAtom);
			return boards.find((board) => board.id === id);
		},
	set:
		(id) =>
		({ get, set }, newValue) => {
			const boards = get(BoardsAtom);
			const index = boards.findIndex((board) => board.id === id);
			if (index === -1) {
				const newBoards = [...boards, newValue] as BoardType[];
				set(BoardsAtom, newBoards);
				return;
			}
			const newBoards = [...boards];
			newBoards[index] = { ...newBoards[index], ...newValue };
			set(BoardsAtom, newBoards);
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
