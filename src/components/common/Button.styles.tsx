import { css, styled } from "styled-components";
import { Bordered } from "./Bordered.styles.tsx";
import { ButtonProps } from "./Button.tsx";

interface StyledButtonProps extends Pick<ButtonProps, "shape" | "fade" | "size" | "width" | "height"> {}

export const StyledButton = styled.button<StyledButtonProps>`
	${Bordered};
	padding: 0.6em 1.2em;
	font-size: 1em;
	font-weight: 500;
	font-family: inherit;
	cursor: pointer;
	transition: border-color 0.25s;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: ${({ theme }) => theme.boxShadow.sm};
	width: ${({ width }) => width ? `${width}px` : "unset"};
	height: ${({ height }) => height ? `${height}px` : "unset"};
	gap: 0.5rem;

	&:focus,
	&:focus-visible {
		outline: 2px auto -webkit-focus-ring-color;
	}

	&:hover {
		filter: brightness(110%);
	}

	&:active {
		box-shadow: none;
	}

	${({ fade }) => {
		if (fade) {
			return css`
				opacity: 0.5;
			`;
		}
	}}

	${({ size, theme }) => {
		switch (size) {
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
	${({ shape, theme }) => {
		switch (shape) {
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
