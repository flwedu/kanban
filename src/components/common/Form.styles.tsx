import { styled } from "styled-components";

export const Label = styled.label`
	display: block;
	margin-bottom: ${({ theme }) => theme.spacing["2"]};
	font-size: ${({ theme }) => theme.fontSize["base"]};
	font-weight: 500;
`;

export const FormRow = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: ${({ theme }) => theme.spacing["4"]};
	justify-content: start;
	align-content: start;
	margin-inline: auto;
	max-width: 100px;
`;

export const Input = styled.input`
	padding: ${({ theme }) => theme.spacing["2"]};
	border-radius: ${({ theme }) => theme.borderRadius["md"]};
	border: 1px solid ${({ theme }) => theme.colors["blueGray"]["300"]};
	background-color: ${({ theme }) => theme.colors["blueGray"]["100"]};
`;
