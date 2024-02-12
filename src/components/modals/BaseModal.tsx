import { PropsWithChildren, ReactElement } from "react";
import {
	StyledModal,
	StyledModalContent,
	StyledModalFooter,
	StyledModalHeader,
	StyledModalWrapper,
} from "./Modal.styles.tsx";

type BaseModalProps = {
	open?: boolean;
	title?: string | null;
	footerButtons?: ReactElement[];
};

export function BaseModal({ open, footerButtons, title, children }: PropsWithChildren<BaseModalProps>) {
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
	) : null;
}
