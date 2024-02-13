import { lighten, opacify, readableColor } from "polished";
import { ButtonHTMLAttributes, PropsWithChildren, ReactElement } from "react";
import { useTheme } from "styled-components";
import { AppThemeColors } from "../../interface/Theme.ts";
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

/**
 * Get initial background color.
 *
 * @param {ButtonProps} props - The button properties.
 * @param {string} colors - The themes colors.
 * @returns {string} - The determined initial background color.
 */
const getInitialBgColor = (props: ButtonProps, colors: AppThemeColors): string => {
	const { buttonColor, secondary, success, danger } = props;

	return buttonColor
		? buttonColor
		: secondary
			? colors.secondary
			: success
				? colors.success
				: danger
					? colors.danger
					: colors.primary;
};

/**
 * Renders a button component with customizable styles and behavior.
 *
 * @param {object} props - The props for the Button component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the button.
 * @param {boolean} [props.success] - Determines if the button should have a success color.
 * @param {boolean} [props.danger] - Determines if the button should have a danger color.
 * @param {boolean} [props.disabled] - Determines if the button should be disabled.
 * @param {string} [props.buttonColor] - The custom color for the button.
 * @param {boolean} [props.secondary] - Determines if the button should have a secondary color.
 * @param {string} [props.type="button"] - The type attribute for the button element.
 * @returns {ReactElement} - The rendered Button component.
 */
export function Button({
	children,
	disabled,
	type = "button",
	...props
}: PropsWithChildren<ButtonProps>): ReactElement {
	const { colors, pureColors } = useTheme();

	const initialBgColor = getInitialBgColor(props, colors);
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
