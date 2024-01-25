import { BoardType } from "../../interface/Board.ts";

export function createBoard(data: Partial<BoardType>) {
	return {
		id: data.id ?? crypto.randomUUID(),
		color: data.color,
		cards: [],
		createdAt: new Date(),
		title: data.title ?? "New Board",
		updatedAt: new Date(),
	};
}
