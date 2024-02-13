import { PropsWithChildren, ReactElement } from "react";
import {
	StyledModal,
	StyledModalContent,
	StyledModalFooter,
	StyledModalHeader,
	StyledModalWrapper,
} from "./Modal.styles.tsx";

type BaseModalProps = {
	footerButtons?: ReactElement[];
	open?: boolean;
	title?: string | null;
};

/**
 * Renders a base modal component.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {boolean} props.open - Determines whether the modal is open or not.
 * @param {ReactNode} props.footerButtons - The buttons to display in the modal footer.
 * @param {string} props.title - The title to display in the modal header.
 * @param {ReactNode} props.children - The content to display in the modal body.
 *
 * @return {ReactElement} The rendered base modal component or null if it is not open.
 */
export function BaseModal({ open, footerButtons, title, children }: PropsWithChildren<BaseModalProps>): ReactElement {
	return open ? (
		<StyledModalWrapper>
			<StyledModal>
				<StyledModalHeader>
					<h3>{title}</h3>
				</StyledModalHeader>
				<StyledModalContent>{children}</StyledModalContent>
				<StyledModalFooter>{footerButtons?.map((footerButton) => footerButton)}</StyledModalFooter>
			</StyledModal>
		</StyledModalWrapper>
	) : (
		<></>
	);
}
