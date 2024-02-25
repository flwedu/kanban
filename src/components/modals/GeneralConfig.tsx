import { Button, type PopoverProps, Stack } from "@mantine/core";
import { TrashIcon } from "lucide-react";
import { ReactElement } from "react";

interface GeneralConfigModalProps extends PopoverProps {
	onClickResetAll: () => void;
	onClose: () => void;
}

/**
 * Renders a modal with some options.
 *
 * @returns {ReactElement} The rendered modal component.
 */
export function GeneralConfigPopoverContent({ onClickResetAll, onClose }: GeneralConfigModalProps): ReactElement {
	return (
		<Stack>
			<Button
				onClick={() => {
					onClickResetAll();
					onClose();
				}}
				color="red"
			>
				<TrashIcon /> Reset all boards
			</Button>
		</Stack>
	);
}
