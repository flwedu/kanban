import { useRecoilCallback, useRecoilValue } from "recoil";
import { BoardType } from "../interface/Board.ts";
import { BoardsAtom, BoardSelectorById } from "../state/Board.ts";
import { CardsAtom } from "../state/Cards.ts";
import { createBoard } from "../useCases/board/createBoard.ts";

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
	const boards = useRecoilValue(BoardsAtom);

	const addBoard = useRecoilCallback(
		({ set }) =>
			() => {
				const newBoard = createBoard({});
				set(BoardsAtom, (currVal) => [...currVal, newBoard]);
				return { boardId: newBoard.id, newOrder: -1 };
			},
		[],
	);

	const deleteBoard = useRecoilCallback(
		({ transact_UNSTABLE: transact }) =>
			(boardId: string) => {
				transact(({ set }) => {
					set(BoardsAtom, (currVal) => currVal.filter((board) => board.id !== boardId));
					set(CardsAtom, (currVal) => currVal.filter((card) => card.boardId !== boardId));
				});
			},
		[],
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
