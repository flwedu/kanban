import { Card, Stack } from "@mantine/core";
import { forwardRef, ReactNode } from "react";

type EmptyBoardProps = {
	children: ReactNode;
};

export const EmptyBoard = forwardRef<HTMLDivElement, EmptyBoardProps>(function EmptyBoard({ children }, ref) {
	return (
		<Card w={250} h={500} flex="0 0 250px" ref={ref} shadow="sm" p="md" radius="md" withBorder>
			<Stack h="100%" justify="center" align="center" p="sm">
				{children}
			</Stack>
		</Card>
	);
});
