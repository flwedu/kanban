import { Plus, Settings } from "lucide-react";
import React, { ReactElement } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useCardDrop } from "../../hooks/useCardDrop.ts";
import { useModalState } from "../../hooks/useModalState.ts";
import { BoardType } from "../../interface/Board.ts";
import { BoardSelectorById } from "../../state/Board.ts";
import { CardsAtom } from "../../state/Cards.ts";
import { createCard } from "../../useCases/card/createCard.ts";
import { storeCard } from "../../useCases/card/storeCard.ts";
import Card from "../card/Card.tsx";
import { Button } from "../common/Button.tsx";
import { DropLocation } from "../droppable/DropLocation.tsx";
import { BoardBody, BoardHeader, StyledBoard } from "./Board.styles.tsx";

type BoardProps = {
	id: BoardType["id"];
	order: number;
};

/**
 * Renders a board with its title, cards, and settings button.
 *
 * @param {object} BoardProps - The props for the Board component.
 * @param {string} BoardProps.id - The ID of the board.
 *
 * @returns {ReactElement | null} - The rendered Board component.
 */
export default function Board({ id }: BoardProps): ReactElement | null {
	const [editing, setEditing] = React.useState(false);
	const [, { open }] = useModalState("board");
	const setCards = useSetRecoilState(CardsAtom);
	const [board, setBoard] = useRecoilState(BoardSelectorById(id));
	const [, dropRef] = useCardDrop({
		dropInfoGetter: () => ({ boardId: id, newOrder: -1 }),
	});

	if (!board) {
		return null;
	}

	const onClickSettings = () => {
		open(id);
	};

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
				<Button onClick={onClickSettings} size="sm" data-hidden-without-hover>
					<Settings size={16} />
				</Button>
			</BoardHeader>
			<BoardBody>
				<Button onClick={addCard} size="md">
					<Plus size={16} /> Add card
				</Button>
				<DropLocation key={0} boardId={id} order={0} />
				{board.cards.map((cardId, order) => {
					return (
						<>
							<Card key={cardId} id={cardId} order={order} />
							<DropLocation key={cardId} boardId={id} order={order + 1} />
						</>
					);
				})}
			</BoardBody>
		</StyledBoard>
	);
}
