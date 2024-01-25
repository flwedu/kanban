import { useRecoilValue } from "recoil";
import { styled } from "styled-components";
import { CardSelectorById } from "../state/Cards.ts";

const StyledCard = styled.div`
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
