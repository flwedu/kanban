import { styled } from "styled-components";
import { Bordered } from "./Bordered.styles.tsx";

export const Button = styled.button`
	${Bordered};
	border: 1px solid transparent;
	padding: 0.6em 1.2em;
	font-size: 1em;
	font-weight: 500;
	font-family: inherit;
	background-color: ${({ theme }) => theme.colors.gray["800"]};
	cursor: pointer;
	transition: border-color 0.25s;

	&:focus,
	&:focus-visible {
		outline: 2px auto -webkit-focus-ring-color;
	}
`;
