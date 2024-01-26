import { CardType } from "../../interface/Card.ts";

export function createCard(data: Partial<CardType>): CardType {
	if (!data.boardId) {
		throw new Error("boardId is required");
	}

	const cardId = data.id ?? crypto.randomUUID();

	return {
		...data,
		id: cardId,
		boardId: data.boardId,
		createdAt: data.createdAt ?? new Date(),
		updatedAt: data.updatedAt ?? new Date(),
		description: data.description ?? "",
		tags: data.tags ?? {},
		title: data.title ?? "New Card",
	};
}
