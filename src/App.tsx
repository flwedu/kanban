import "./App.css";
import { useRecoilState } from "recoil";
import Board from "./components/Board.tsx";
import { BoardsAtom } from "./state/Board.ts";

function App() {
  const [boards, setBoards] = useRecoilState(BoardsAtom);

  const addBoard = () => {
    console.log("add board");
    setBoards((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        title: "Board " + (prev.length + 1),
        cards: [],
        color: "#fff",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
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
