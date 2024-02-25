import { atom, selectorFamily } from "recoil";
import { BoardType } from "../interface/Board.ts";
import persistAtom from "./persist.ts";

export const BoardsAtom = atom<BoardType[]>({
	key: "BoardsAtom",
	default: [
		{
			id: "TODO",
			title: "TODO 📋",
			cards: [],
			createdAt: new Date(),
			updatedAt: new Date(),
			color: "#a855f7",
		},
		{
			id: "DOING",
			title: "Doing 👷",
			cards: [],
			createdAt: new Date(),
			updatedAt: new Date(),
			color: "#f59e0b",
		},
		{
			id: "DONE",
			title: "Done ✅",
			cards: [],
			createdAt: new Date(),
			updatedAt: new Date(),
			color: "#22c55e",
		},
	],
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
