import { Button, Card, Group, Input, Popover, Stack } from "@mantine/core";
import { Plus, Settings } from "lucide-react";
import React, { Fragment, ReactElement, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useCardDrop } from "../../hooks/useCardDrop.ts";
import { BoardType } from "../../interface/Board.ts";
import { BoardSelectorById } from "../../state/Board.ts";
import { CardsAtom } from "../../state/Cards.ts";
import { createCard } from "../../useCases/card/createCard.ts";
import { storeCard } from "../../useCases/card/storeCard.ts";
import EditableCard from "../card/EditableCard.tsx";
import { DropLocation } from "../droppable/DropLocation.tsx";
import { BoardConfigPopoverContent } from "../modals/BoardConfig.tsx";

type BoardProps = {
	id: BoardType["id"];
	onRemoveBoard: (boardId: BoardType["id"]) => void;
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
export default function Board({ id, onRemoveBoard }: BoardProps): ReactElement | null {
	const [isOpenConfig, setIsOpenConfig] = useState(false);
	const setCards = useSetRecoilState(CardsAtom);
	const [board, setBoard] = useRecoilState(BoardSelectorById(id));
	const [, dropRef] = useCardDrop({
		dropInfoGetter: () => ({ boardId: id, newOrder: -1 }),
	});

	if (!board) {
		return null;
	}

	const onOpenConfigs = () => {
		setIsOpenConfig(true);
	};

	const onCloseConfings = () => {
		setIsOpenConfig(false);
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
	};

	return (
		<Card w={250} h={500} ref={dropRef} shadow="sm" p="md" radius="md" withBorder>
			<Card.Section>
				<Group justify="space-between" px="md" py="sm" wrap="nowrap">
					<Input m={0} fw={600} variant="unstyled" defaultValue={board.title} onBlur={onHeaderInputBlur} />
					<Popover opened={isOpenConfig} onChange={setIsOpenConfig} position="bottom" withArrow shadow="md">
						<Popover.Target>
							<Button onClick={onOpenConfigs} size="compact-sm" color="indigo" variant="transparent">
								<Settings size={20} />
							</Button>
						</Popover.Target>
						<Popover.Dropdown>
							<BoardConfigPopoverContent
								boardId={id}
								onClose={onCloseConfings}
								onRemoveBoard={() => {
									onCloseConfings();
									onRemoveBoard(id);
								}}
							/>
						</Popover.Dropdown>
					</Popover>
				</Group>
			</Card.Section>
			<Stack gap={1} justify="flex-start" align="center" p="sm">
				<Button onClick={addCard} color="indigo" variant="outline">
					<Plus size={16} /> Add card
				</Button>
				<DropLocation boardId={id} order={0} />
				{board.cards.map((cardId, order) => {
					return (
						<Fragment key={`${cardId}_fragment`}>
							<EditableCard key={cardId} id={cardId} order={order} />
							<DropLocation key={`${cardId}_drop`} boardId={id} order={order + 1} />
						</Fragment>
					);
				})}
			</Stack>
		</Card>
	);
}
