import { forwardRef, ReactNode } from "react";
import { BoardBody, BoardHeader, StyledBoard } from "./Board.styles.tsx";

type EmptyBoardProps = {
	children: ReactNode;
};

export const EmptyBoard = forwardRef<HTMLDivElement, EmptyBoardProps>(function EmptyBoard({ children }, ref) {
	return (
		<StyledBoard
			ref={ref}
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<BoardHeader>
				<h2></h2>
			</BoardHeader>
			<BoardBody>{children}</BoardBody>
		</StyledBoard>
	);
});
