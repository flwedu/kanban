import React, { ReactElement, useRef, useState } from "react";
import { BaseModal } from "../components/modals/BaseModal.tsx";

export type ShowConfirmDialogParams = {
	title: string;
	message: string;
	okButton?: ReactElement;
	cancelButton?: ReactElement;
	onClickOkButton?: () => void;
	onClickCancelButton?: () => void;
};

export type UseConfirmationModalReturn = [
	() => React.JSX.Element,
	{
		showConfirmDialog: (params: ShowConfirmDialogParams) => void;
	},
];

export function useConfirmationModal(): UseConfirmationModalReturn {
	const [open, setOpen] = useState(false);
	const messageRef = useRef<string | null>(null);
	const titleRef = useRef<string | null>(null);
	const footerButtonsRef = useRef<ReactElement[] | null>(null);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		messageRef.current = null;
		titleRef.current = null;
		footerButtonsRef.current = null;
		setOpen(false);
	};

	const showConfirmDialog = (params: ShowConfirmDialogParams) => {
		messageRef.current = params.message;
		titleRef.current = params.title;
		footerButtonsRef.current = [];
		if (params.okButton) {
			footerButtonsRef.current?.push(
				React.cloneElement(params.okButton, {
					onClick: () => {
						params.onClickOkButton?.();
						handleClose();
					},
				}),
			);
		}
		if (params.cancelButton) {
			footerButtonsRef.current?.push(
				React.cloneElement(params.cancelButton, {
					onClick: () => {
						params.onClickCancelButton?.();
						handleClose();
					},
				}),
			);
		}
		handleOpen();
	};

	return [
		() => (
			<BaseModal
				opened={open}
				onClose={handleClose}
				title={titleRef.current}
				footerButtons={footerButtonsRef.current ?? []}
			>
				{messageRef.current}
			</BaseModal>
		),
		{ showConfirmDialog },
	];
}
