import { Card, Group, Input } from "@mantine/core";
import React, { ReactElement } from "react";
import { useRecoilState } from "recoil";
import { useCardDrag } from "../../hooks/useCardDrag.ts";
import { CardSelectorById } from "../../state/Cards.ts";

type CardProps = {
	id: string;
	order: number;
};

/**
 * Renders a card component.
 *
 * @param {CardProps} props - The props for the card component.
 * @param {number} props.id - The unique identifier for the card.
 * @param {number} props.order - The order of the card.
 * @returns {ReactElement|null} The rendered card component, or null if the card is not available.
 */
export default function EditableCard({ id, order }: CardProps): ReactElement | null {
	const [card, setCard] = useRecoilState(CardSelectorById(id));
	const [{ isDragging }, dragRef] = useCardDrag({ card, order });

	if (!card) {
		return null;
	}

	const onHeaderInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		const title = e.target.value?.trim();
		const newCard = { ...card, title };
		setCard(newCard);
	};

	return (
		<Card
			w="100%"
			className={isDragging ? "dragging" : undefined}
			ref={dragRef}
			shadow="xs"
			padding="sm"
			radius="sm"
			withBorder
		>
			<Group p="xs" m={0}>
				<Input
					defaultValue={card.title}
					placeholder="Type a card description"
					onBlur={onHeaderInputBlur}
					variant="unstyled"
				/>
			</Group>
		</Card>
	);
}
