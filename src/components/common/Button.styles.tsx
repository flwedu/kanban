import { lighten, opacify } from "polished";
import { css, styled } from "styled-components";
import { Bordered } from "./Bordered.styles.tsx";

export const Button = styled.button<{
	$fade?: boolean;
	$shape?: "rounded" | "pill";
	$size?: "sm" | "md" | "lg";
	danger?: boolean;
	disabled?: boolean;
	success?: boolean;
	bgColor?: string;
}>`
	${Bordered};
	border: 1px solid transparent;
	padding: 0.6em 1.2em;
	font-size: 1em;
	font-weight: 500;
	font-family: inherit;
	color: #ffffff;
	cursor: pointer;
	transition: border-color 0.25s;
	display: flex;
	align-items: center;
	justify-content: center;

	${({ theme, success, danger, disabled, bgColor }) => {
		const initialBgColor =
			bgColor ?? success ? theme.colors.success : danger ? theme.colors.danger : theme.colors.primary;
		const usedColor = disabled ? opacify(0.8, initialBgColor) : initialBgColor;
		const borderColor = lighten(0.1, usedColor);

		return css`
			background-color: ${usedColor};
			border: 1px solid ${borderColor};
		`;
	}};

	&:focus,
	&:focus-visible {
		outline: 2px auto -webkit-focus-ring-color;
	}

	${({ $fade }) => {
		if ($fade) {
			return css`
				opacity: 0.5;
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
