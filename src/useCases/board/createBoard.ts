import { BoardType } from "../../interface/Board.ts";
import { getRandomColor } from "../../utils/getRandomColor.ts";

export function createBoard(data: Partial<BoardType>) {
	const color = data.color || getRandomColor();

	return {
		color,
		cards: [],
		createdAt: new Date(),
		id: data.id ?? crypto.randomUUID(),
		title: data.title ?? "New Board",
		updatedAt: new Date(),
	};
}
