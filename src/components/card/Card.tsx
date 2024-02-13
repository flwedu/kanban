import { NotepadText, Tags } from "lucide-react";
import React, { ReactElement } from "react";
import { useRecoilState } from "recoil";
import { useCardDrag } from "../../hooks/useCardDrag.ts";
import { CardSelectorById } from "../../state/Cards.ts";
import { Button } from "../common/Button.tsx";
import { CardBody, CardHeader, StyledCard } from "./Card.styles.tsx";

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
export default function Card({ id, order }: CardProps): ReactElement | null {
	const [editingHeader, setEditingHeader] = React.useState(false);
	const [card, setCard] = useRecoilState(CardSelectorById(id));
	const [{ isDragging }, dragRef] = useCardDrag({ card, order });

	if (!card) {
		return null;
	}

	const hasDescription = card.description?.trim().length > 0;
	const hasTags = Object.keys(card.tags).length > 0;

	const onHeaderInputBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
		const title = e.target.value?.trim();
		if (!title) {
			setEditingHeader(false);
			return;
		}
		const newCard = { ...card, title };
		setCard(newCard);
		setEditingHeader(false);
	};

	return (
		<StyledCard className={isDragging ? "dragging" : undefined} ref={dragRef}>
			<CardHeader>
				{editingHeader ? (
					<textarea defaultValue={card.title} onBlur={onHeaderInputBlur} autoFocus />
				) : (
					<h3 onClick={() => setEditingHeader(true)}>{card.title}</h3>
				)}
				<Button size={"sm"} fade={!hasDescription}>
					<NotepadText size={16} />
				</Button>
			</CardHeader>
			<CardBody>
				<div></div>
				<Button size={"sm"} fade={!hasTags} data-hidden-without-hover>
					<Tags size={16} />
				</Button>
			</CardBody>
		</StyledCard>
	);
}
