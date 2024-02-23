import { AppShell, Button, Group, MantineProvider, Title } from "@mantine/core";
import "@mantine/core/styles.css";
import { Plus, Trash, X } from "lucide-react";
import Board from "./components/board/Board.tsx";
import { EmptyBoard } from "./components/board/EmptyBoard.tsx";
import { StyledDropLocation } from "./components/droppable/DropLocation.styles.tsx";
import { ThemeSwitch } from "./components/misc/ThemeSwitch.tsx";
import { useBoards } from "./hooks/useBoards.ts";
import { useCardDrop } from "./hooks/useCardDrop.ts";
import { useConfirmationModal } from "./hooks/useConfirmationModal.tsx";

function App() {
	const [boards, { addBoard, deleteBoard }] = useBoards();
	const [{ isOver, canDrop }, dropRef] = useCardDrop({
		dropInfoGetter: addBoard,
	});
	const [ConfirmModal, { showConfirmDialog }] = useConfirmationModal();

	function onRemoveBoard(id: string) {
		showConfirmDialog({
			title: "Are you sure?",
			message: "This action cannot be undone.",
			okButton: (
				<Button color="red">
					<Trash />
					Remove
				</Button>
			),
			cancelButton: (
				<Button color="gray">
					<X /> Undo
				</Button>
			),
			onClickOkButton: () => deleteBoard(id),
		});
	}

	const Content =
		isOver && canDrop ? (
			<StyledDropLocation className="hovering" />
		) : (
			<Button onClick={addBoard} color="indigo" variant="outline">
				<Plus /> Add board
			</Button>
		);

	return (
		<MantineProvider>
			<AppShell header={{ height: 50 }}>
				<AppShell.Header>
					<Group justify="space-between" px="lg" align="center">
						<Title>Kanban Board</Title>
						<ThemeSwitch />
					</Group>
				</AppShell.Header>
				<AppShell.Main m="lg">
					<Group>
						{boards.map((board, order) => {
							return <Board key={board.id} id={board.id} order={order} onRemoveBoard={onRemoveBoard} />;
						})}
						<EmptyBoard ref={dropRef}>{Content}</EmptyBoard>
					</Group>
				</AppShell.Main>
			</AppShell>
			<ConfirmModal />
		</MantineProvider>
	);
}

export default App;
