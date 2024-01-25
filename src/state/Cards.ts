import { atom, selectorFamily } from "recoil";
import { CardType } from "../interface/Card.ts";

export const CardsAtom = atom<CardType[]>({
  key: "CardsAtom",
  default: [],
});

export const CardSelectorById = selectorFamily<CardType | undefined, string>({
  key: "CardSelectorById",
  get:
    (id) =>
    ({ get }) => {
      const cards = get(CardsAtom);
      return cards.find((card) => card.id === id);
    },
});
