import { useState } from "react";
import { useRecoilCallback } from "recoil";
import { BoardsAtom } from "../state/Board.ts";
import { CardsAtom } from "../state/Cards.ts";

export function useGeneralConfigs() {
	const [generalConfigIsOpened, setGeneralConfigIsOpened] = useState<boolean>(false);

	const openGeneralConfigs = () => setGeneralConfigIsOpened(true);
	const closeGeneralConfigs = () => setGeneralConfigIsOpened(false);

	const onResetBoards = useRecoilCallback(
		({ transact_UNSTABLE: transact }) =>
			() => {
				transact(({ reset }) => {
					reset(BoardsAtom);
					reset(CardsAtom);
				});
			},
		[],
	);

	return [
		generalConfigIsOpened,
		{
			closeGeneralConfigs,
			onResetAllBoards: onResetBoards,
			openGeneralConfigs,
			setGeneralConfigIsOpened,
		},
	] as const;
}
