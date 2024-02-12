import { Plus } from "lucide-react";
import { useRecoilState } from "recoil";
import { ThemeProvider } from "styled-components";
import Board from "./components/board/Board.tsx";
import { EmptyBoard } from "./components/board/EmptyBoard.tsx";
import { Button } from "./components/common/Button.tsx";
import { StyledDropLocation } from "./components/droppable/DropLocation.styles.tsx";
import { ThemeSwitch } from "./components/misc/ThemeSwitch.tsx";
import { BoardConfigModal } from "./components/modals/BoardConfig.tsx";
import { Header, Main } from "./components/Page.styles.tsx";
import { useCardDrop } from "./hooks/useCardDrop.ts";
import { BoardsAtom } from "./state/Board.ts";
import { configsAtom } from "./state/Configs.ts";
import { GlobalStyles } from "./theme/App.styles.tsx";
import { darkTheme } from "./theme/dark.ts";
import { lightTheme } from "./theme/light.ts";
import { createBoard } from "./useCases/board/createBoard.ts";
import { storeBoard } from "./useCases/board/storeBoard.ts";

function App() {
	const [configs, setConfigs] = useRecoilState(configsAtom);
	const [boards, setBoards] = useRecoilState(BoardsAtom);
	const [{ isOver, canDrop }, dropRef] = useCardDrop({
		dropInfoGetter: addBoard,
	});

	function addBoard() {
		const newBoard = createBoard({});
		storeBoard(setBoards, newBoard);
		return { boardId: newBoard.id, newOrder: -1 };
	}

	function removeBoard(id: string) {
		setBoards(boards.filter(board => board.id !== id));
	}

	function onThemeChange(checked: boolean) {
		setConfigs((prev) => {
			return {
				...prev,
				darkMode: checked,
			};
		});
	}

	const Content =
		isOver && canDrop ? (
			<StyledDropLocation className="hovering" />
		) : (
			<Button onClick={addBoard} size="md">
				<Plus /> Add board
			</Button>
		);

	return (
		<ThemeProvider theme={configs.darkMode ? darkTheme : lightTheme}>
			<GlobalStyles />
			<Header>
				<h1>Kanban Board 🗒</h1>
				<ThemeSwitch checked={configs.darkMode} onChange={onThemeChange} />
			</Header>
			<Main>
				{boards.map((board, order) => {
					return <Board key={board.id} id={board.id} order={order} />;
				})}
				<EmptyBoard ref={dropRef}>{Content}</EmptyBoard>
			</Main>
			<BoardConfigModal onRemoveBoard={removeBoard} />
		</ThemeProvider>
	);
}

export default App;
