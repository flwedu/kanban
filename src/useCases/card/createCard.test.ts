import { describe, expect, it } from "vitest";
import { createCard } from "./createCard.ts";

describe("createCard", () => {
	it("should create a card", () => {
		const data = {
			id: "test-id",
			boardId: "test-board-id",
		};
		const card = createCard(data);
		expect(card).toMatchObject({
			id: "test-id",
			boardId: "test-board-id",
			createdAt: expect.any(Date),
			updatedAt: expect.any(Date),
			description: "",
			tags: {},
			title: "",
		});
	});

	it("should throw an error if no boardId is provided", () => {
		const data = {};
		expect(() => createCard(data)).toThrow("boardId is required");
	});
});
