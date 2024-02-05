import { atom, selectorFamily } from "recoil";
import { CardType } from "../interface/Card.ts";
import persistAtom from "./persist.ts";

export const CardsAtom = atom<CardType[]>({
	key: "CardsAtom",
	default: [],
	effects_UNSTABLE: [persistAtom],
});

export const CardSelectorById = selectorFamily<CardType | undefined, string>({
	key: "CardSelectorById",
	get:
		(id) =>
		({ get }) => {
			const cards = get(CardsAtom);
			return cards.find((card) => card.id === id);
		},
	set:
		(id) =>
		({ get, set }, newValue) => {
			const cards = get(CardsAtom);
			const index = cards.findIndex((card) => card.id === id);
			if (index === -1) return;
			const newCards = [...cards];
			newCards[index] = { ...newCards[index], ...newValue };
			set(CardsAtom, newCards);
		},
});
