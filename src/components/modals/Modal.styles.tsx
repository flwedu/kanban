import styled from "styled-components";

export const StyledModal = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	background-color: ${({ theme }) => theme.colors["blueGray"]["800"]};
	padding: ${({ theme }) => theme.spacing["4"]};
`;

export const StyledModalHeader = styled.div`

`;

export const StyledModalContent = styled.div`

`;

export const StyledModalFooter = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: ${({ theme }) => theme.spacing["4"]};
	gap: ${({ theme }) => theme.spacing["4"]};
`;
