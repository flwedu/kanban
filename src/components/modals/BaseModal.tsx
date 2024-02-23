import { Group, Modal, Stack } from "@mantine/core";
import { type ComponentProps, PropsWithChildren, ReactElement } from "react";

type BaseModalProps = {
	footerButtons?: ReactElement[];
} & ComponentProps<typeof Modal>;

/**
 * Renders a base modal component.
 *
 * @return {ReactElement} The rendered base modal component or null if it is not open.
 */
export function BaseModal({ footerButtons, children, ...props }: PropsWithChildren<BaseModalProps>): ReactElement {
	return (
		<Modal
			centered
			{...props}
			overlayProps={{
				backgroundOpacity: 0.55,
				blur: 3,
			}}
		>
			<Stack>
				{children}
				<Group justify="end">{footerButtons?.map((footerButton) => footerButton)}</Group>
			</Stack>
		</Modal>
	);
}
