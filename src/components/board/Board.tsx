import { Plus } from "lucide-react";
import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useCardDrop } from "../../hooks/useCardDrop.ts";
import { BoardType } from "../../interface/Board.ts";
import { BoardSelectorById } from "../../state/Board.ts";
import { CardsAtom } from "../../state/Cards.ts";
import { createCard } from "../../useCases/card/createCard.ts";
import { storeCard } from "../../useCases/card/storeCard.ts";
import Card from "../card/Card.tsx";
import { DropLocation } from "../droppable/DropLocation.tsx";
import { Button } from "../common/Button.styles.tsx";
import { BoardBody, BoardHeader, StyledBoard } from "./Board.styles.tsx";

type BoardProps = {
	id: BoardType["id"];
	order: number;
};

export default function Board({ id }: BoardProps) {
	const [editing, setEditing] = React.useState(false);
	const setCards = useSetRecoilState(CardsAtom);
	const [board, setBoard] = useRecoilState(BoardSelectorById(id));
	const [, dropRef] = useCardDrop({ boardId: id, order: -1 });

	if (!board) {
		return null;
	}

	const addCard = () => {
		const newCard = createCard({ boardId: id });
		storeCard({
			data: newCard,
			setCardsFn: setCards,
			setBoardFn: setBoard,
		});
	};

	const onHeaderInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		const title = e.target.value?.trim();
		const newBoard = { ...board, title };
		setBoard(newBoard);
		setEditing(false);
	};

	return (
		<StyledBoard ref={dropRef}>
			<BoardHeader $color={board.color}>
				{editing ? (
					<input type="text" defaultValue={board.title} onBlur={onHeaderInputBlur} autoFocus />
				) : (
					<h2 onClick={() => setEditing(true)}>{board.title}</h2>
				)}
				<Button onClick={addCard} $size="sm" data-hidden-without-hover>
					<Plus size={16} />
				</Button>
			</BoardHeader>
			<BoardBody>
				<DropLocation key={0} boardId={id} order={0} />
				{board.cards.map((cardId, order) => {
					return (
						<>
							<Card key={cardId} id={cardId} order={order} />
							<DropLocation key={order + 1} boardId={id} order={order + 1} />
						</>
					);
				})}
			</BoardBody>
		</StyledBoard>
	);
}
