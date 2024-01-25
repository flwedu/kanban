import { SetterOrUpdater } from "recoil";
import { describe, expect, it, vi } from "vitest";
import { BoardType } from "../../interface/Board.ts";
import { createBoard } from "./createBoard.ts";
import { storeBoard } from "./storeBoard.ts";

const setterSpy = vi.fn();

const mockedSetterFn: SetterOrUpdater<BoardType[]> = (valOrUpdater) => {
	if (typeof valOrUpdater === "function") {
		const result = valOrUpdater([]);
		return setterSpy(result);
	}
	return valOrUpdater;
};

describe("storeBoard", () => {
	it("should call `setBoardsFn` with the created board", () => {
		const board = createBoard({
			id: "test-id",
			color: "test-color",
			title: "test-title",
		});
		storeBoard(mockedSetterFn, board);
		expect(setterSpy).toHaveBeenCalledWith([board]);
	});
});
