import "./App.css";
import { useRecoilState } from "recoil";
import Board from "./components/Board.tsx";
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
    <main>
      <button onClick={addBoard}>Add board</button>
      {boards.map((board, order) => {
        return <Board key={board.id} board={board} order={order} />;
      })}
    </main>
  );
}

export default App;
