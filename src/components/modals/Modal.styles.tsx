import styled from "styled-components";

export const StyledModalWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StyledModal = styled.div`
	border-radius: ${({ theme }) => theme.borderRadius["md"]};
	width: 400px;
	background-color: ${({ theme }) => theme.colors["blueGray"]["800"]};
	padding: ${({ theme }) => theme.spacing["4"]};
`;

export const StyledModalHeader = styled.div``;

export const StyledModalContent = styled.div``;

export const StyledModalFooter = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: ${({ theme }) => theme.spacing["4"]};
	gap: ${({ theme }) => theme.spacing["4"]};
`;
