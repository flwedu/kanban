import { useCallback } from "react";
import { useRecoilCallback, useRecoilState, useSetRecoilState } from "recoil";
import { BoardType } from "../interface/Board.ts";
import { BoardsAtom, BoardSelectorById } from "../state/Board.ts";
import { CardsAtom } from "../state/Cards.ts";
import { createBoard } from "../useCases/board/createBoard.ts";
import { storeBoard } from "../useCases/board/storeBoard.ts";

type UseBoardsReturn = [
	BoardType[],
	{
		addBoard: () => { boardId: string; newOrder: number };
		deleteBoard: (boardId: string) => void;
		updateBoard: (boardId: string, data: BoardType) => void;
	},
];

/**
 * Returns the current state of boards and functions to manipulate the boards.
 * @returns {[
 *   Array<BoardType>,
 *   {
 *     addBoard: () => { boardId: string, newOrder: number },
 *     deleteBoard: (boardId: string) => void,
 *     updateBoard: (boardId: string, data: BoardType) => void
 *   }
 * ]}
 */
export function useBoards(): UseBoardsReturn {
	const [boards, setBoards] = useRecoilState(BoardsAtom);
	const setCards = useSetRecoilState(CardsAtom);

	const addBoard = useCallback(() => {
		const newBoard = createBoard({});
		storeBoard(setBoards, newBoard);
		return { boardId: newBoard.id, newOrder: -1 };
	}, [setBoards]);

	const deleteBoard = useCallback(
		(boardId: string) => {
			setBoards((currVal) => currVal.filter((board) => board.id !== boardId));
			setCards((currVal) => currVal.filter((card) => card.boardId !== boardId));
		},
		[setBoards, setCards],
	);

	const updateBoard = useRecoilCallback(
		({ set }) =>
			(boardId: string, data: BoardType) => {
				set(BoardSelectorById(boardId), (currVal) => {
					if (!currVal) return currVal;
					return {
						...currVal,
						...data,
					};
				});
			},
		[],
	);

	return [
		boards,
		{
			addBoard,
			deleteBoard,
			updateBoard,
		},
	] as const;
}
