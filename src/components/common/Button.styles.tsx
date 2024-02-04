import { styled } from "styled-components";
import { Bordered } from "./Bordered.styles.tsx";

export const Button = styled.button<{
	$size?: "sm" | "md" | "lg";
	$shape?: "rounded" | "pill";
	$fade?: boolean;
}>`
	${Bordered};
	border: 1px solid transparent;
	padding: 0.6em 1.2em;
	font-size: 1em;
	font-weight: 500;
	font-family: inherit;
	background-color: ${({ theme, color }) => color ?? theme.colors.gray["800"]};
	cursor: pointer;
	transition: border-color 0.25s;
	display: flex;
	align-items: center;
	justify-content: center;

	&:focus,
	&:focus-visible {
		outline: 2px auto -webkit-focus-ring-color;
	}

	${({ $fade, theme }) => {
		if ($fade) {
			return `
				opacity: 0.5;
				&:hover {
					border-color: ${theme.colors.gray["500"]};
				}
			`;
		}
	}}

	${({ $size, theme }) => {
		switch ($size) {
			case "sm":
				return `
					padding: 0.25em 0.5em;
					font-size: ${theme.fontSize["sm"]};
				`;
			case "lg":
				return `
					padding: 0.75em 1.5em;
					font-size: ${theme.fontSize["lg"]};
				`;
			default:
				return "";
		}
	}}
	${({ $shape, theme }) => {
		switch ($shape) {
			case "rounded":
				return `
					border-radius: ${theme.borderRadius["full"]};
				`;
			case "pill":
				return `
					border-radius: 50%;
				`;
			default:
				return `
					border-radius: ${theme.borderRadius["md"]};
				`;
		}
	}}
`;
