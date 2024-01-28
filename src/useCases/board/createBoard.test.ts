import { describe, expect, it } from "vitest";
import { createBoard } from "./createBoard.ts";

describe("createBoard", () => {
	it("should create a new board with expected values", () => {
		const data = {
			id: "test-id",
			color: "test-color",
			title: "test-title",
		};
		const board = createBoard(data);
		expect(board).toMatchObject({
			id: "test-id",
			color: "test-color",
			cards: [],
			createdAt: expect.any(Date),
			title: "test-title",
			updatedAt: expect.any(Date),
		});
	});

	it("should create a new board the expected title, if no title provided", () => {
		const data = {};
		const board = createBoard(data);
		expect(board).toMatchObject({
			id: expect.any(String),
			color: expect.any(String),
			cards: [],
			createdAt: expect.any(Date),
			title: "New Board",
			updatedAt: expect.any(Date),
		});
	});
});
