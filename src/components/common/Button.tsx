import { lighten, opacify, readableColor } from "polished";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { useTheme } from "styled-components";
import { StyledButton } from "./Button.styles.tsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	buttonColor?: string;
	danger?: boolean;
	disabled?: boolean;
	fade?: boolean;
	shape?: "rounded" | "pill";
	size?: "sm" | "md" | "lg";
	success?: boolean;
}

export function Button({ children, success, danger, disabled, buttonColor, ...props }: PropsWithChildren<ButtonProps>) {
	const { colors } = useTheme();

	const initialBgColor = buttonColor
		? buttonColor
		: success
			? colors.success
			: danger
				? colors.danger
				: colors.primary;
	const backgroundColor = disabled ? opacify(0.8, initialBgColor) : initialBgColor;
	const borderColor = lighten(0.05, backgroundColor);
	const textColor = readableColor(backgroundColor, "#ffffff", "#000000");

	return (
		<StyledButton
			{...props}
			style={{
				backgroundColor,
				borderColor,
				color: textColor,
			}}
		>
			{children}
		</StyledButton>
	);
}
