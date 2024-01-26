import { FilePlus } from "lucide-react";
import { useRecoilState } from "recoil";
import Board from "./components/board/Board.tsx";
import { EmptyBoard } from "./components/board/EmptyBoard.tsx";
import { Button } from "./components/common/Button.styles.tsx";
import { Main } from "./components/Page.styles.tsx";
import { BoardsAtom } from "./state/Board.ts";
import { createBoard } from "./useCases/board/createBoard.ts";
import { storeBoard } from "./useCases/board/storeBoard.ts";

function App() {
	const [boards, setBoards] = useRecoilState(BoardsAtom);

	const addBoard = () => {
		const newBoard = createBoard({});
		storeBoard(setBoards, newBoard);
	};

	return (
		<Main>
			{boards.map((board, order) => {
				return <Board key={board.id} id={board.id} order={order} />;
			})}
			<EmptyBoard>
				<Button onClick={addBoard}>
					<FilePlus /> Add board
				</Button>
			</EmptyBoard>
		</Main>
	);
}

export default App;
