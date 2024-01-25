import { SetterOrUpdater } from "recoil";
import { BoardType } from "../../interface/Board.ts";

export function storeBoard(setBoardsFn: SetterOrUpdater<BoardType[]>, data: BoardType) {
	setBoardsFn((boards) => {
		return [...boards, data];
	});
}
