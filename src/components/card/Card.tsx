import { useRecoilValue } from "recoil";
import { CardSelectorById } from "../../state/Cards.ts";
import { StyledCard } from "./Card.styles.tsx";

type CardProps = {
	id: string;
	order: number;
};

export default function Card({ id }: CardProps) {
	const cardState = useRecoilValue(CardSelectorById(id));

	if (!cardState) {
		return null;
	}

	return (
		<StyledCard>
			<h1>{cardState.title}</h1>
			<p>{cardState.description}</p>
		</StyledCard>
	);
}
