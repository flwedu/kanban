import { useSetRecoilState } from "recoil";
import { BoardType } from "../../interface/Board.ts";
import { BoardsAtom } from "../../state/Board.ts";
import { CardsAtom } from "../../state/Cards.ts";
import { createCard } from "../../useCases/card/createCard.ts";
import { storeCard } from "../../useCases/card/storeCard.ts";
import Card from "../card/Card.tsx";
import { Button } from "../common/Button.styles.tsx";
import { BoardBody, BoardHeader, StyledBoard } from "./Board.styles.tsx";

type BoardProps = {
	board: BoardType;
	order: number;
};

export default function Board({ board }: BoardProps) {
	const setCards = useSetRecoilState(CardsAtom);
	const setBoards = useSetRecoilState(BoardsAtom);

	const addCard = () => {
		const newCard = createCard({ boardId: board.id });
		storeCard({
			data: newCard,
			setCardsFn: setCards,
			setBoardsFn: setBoards,
		});
	};

	return (
		<StyledBoard>
			<BoardHeader>
				<h2>{board.title}</h2>
			</BoardHeader>
			<BoardBody>
				<Button onClick={addCard}>Add Card</Button>
				{board.cards.map((cardId, order) => {
					return <Card key={cardId} id={cardId} order={order} />;
				})}
			</BoardBody>
		</StyledBoard>
	);
}
