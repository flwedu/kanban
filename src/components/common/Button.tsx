import { lighten, opacify, readableColor } from "polished";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { useTheme } from "styled-components";
import { StyledButton } from "./Button.styles.tsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	buttonColor?: string;
	danger?: boolean;
	disabled?: boolean;
	fade?: boolean;
	height?: number;
	secondary?: boolean;
	shape?: "rounded" | "pill";
	size?: "sm" | "md" | "lg";
	success?: boolean;
	width?: number;
}

export function Button({
	children,
	success,
	danger,
	disabled,
	buttonColor,
	secondary,
	type = "button",
	...props
}: PropsWithChildren<ButtonProps>) {
	const { colors, pureColors } = useTheme();

	const initialBgColor = buttonColor
		? buttonColor
		: secondary
			? colors.secondary
			: success
				? colors.success
				: danger
					? colors.danger
					: colors.primary;
	const backgroundColor = disabled ? opacify(0.8, initialBgColor) : initialBgColor;
	const borderColor = lighten(0.05, backgroundColor);
	const textColor = readableColor(backgroundColor, pureColors.darkText, pureColors.lightText);

	return (
		<StyledButton
			{...props}
			type={type}
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
