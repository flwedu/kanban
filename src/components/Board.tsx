import { styled } from "styled-components";
import { BoardType } from "../interface/Board.ts";
import Card from "./Card.tsx";

const StyledBoard = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
  padding: 16px;
  margin-bottom: 16px;

  h1 {
    font-size: 16px;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    margin-bottom: 0;
  }
`;

type BoardProps = {
  board: BoardType;
  order: number;
};

export default function Board({ board }: BoardProps) {
  return (
    <StyledBoard>
      <h1>{board.title}</h1>
      {board.cards.map((cardId, order) => {
        return <Card key={cardId} id={cardId} order={order} />;
      })}
    </StyledBoard>
  );
}
