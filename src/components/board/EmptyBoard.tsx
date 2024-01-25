import type { ReactNode } from "react";
import { StyledBoard } from "./Board.styles.tsx";

type EmptyBoardProps = {
	children: ReactNode;
};

export const EmptyBoard = ({ children }: EmptyBoardProps) => {
	return (
		<StyledBoard
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			{children}
		</StyledBoard>
	);
};
