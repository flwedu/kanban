import { BoardType } from "../../interface/Board.ts";
import { getRandomColor } from "../../utils/getRandomColor.ts";

export function createBoard(data: Partial<BoardType>) {
	const color = data.color || getRandomColor()["colorValue"]["500"];

	return {
		id: data.id ?? crypto.randomUUID(),
		color,
		cards: [],
		createdAt: new Date(),
		title: data.title ?? "New Board",
		updatedAt: new Date(),
	};
}
