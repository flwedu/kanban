import { styled } from "styled-components";

export const Label = styled.label`
	display: block;
	margin-bottom: ${({ theme }) => theme.spacing.md};
	font-size: ${({ theme }) => theme.fontSize["base"]};
	font-weight: 500;
`;

export const FormRow = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: ${({ theme }) => theme.spacing.md};
	justify-content: start;
	align-content: start;
	margin-inline: auto;
	max-width: 100px;
`;

export const Input = styled.input`
	padding: ${({ theme }) => theme.spacing.sm};
	border-radius: ${({ theme }) => theme.borderRadius["md"]};
	border: 1px solid ${({ theme }) => theme.colors.outline};
	background-color: ${({ theme }) => theme.colors.container[0]};
`;
