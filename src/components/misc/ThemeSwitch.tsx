import { Moon, Sun } from "lucide-react";
import { darken, lighten } from "polished";
import { ReactElement } from "react";
import ReactSwitch from "react-switch";
import { useTheme } from "styled-components";

export interface ThemeSwitchProps {
	checked: boolean;
	onChange: (checked: boolean) => void;
}

/**
 * Returns the on and off colors by darkening and lightening the primary color respectively.
 *
 * @param {string} primaryColor - The primary color of the theme.
 * @returns {{ onColor: string, offColor: string }} The on and off colors.
 */
function generateSwitchColors(primaryColor: string): { onColor: string; offColor: string } {
	const onColor = darken(0.1, primaryColor);
	const offColor = lighten(0.1, primaryColor);

	return { onColor, offColor };
}

/**
 * Renders a theme switch component with a moon and sun icon,
 * allowing users to toggle between light and dark themes.
 *
 * @param {object} props - The properties of the theme switch component.
 * @param {boolean} props.checked - Whether the switch is currently checked.
 * @param {function} props.onChange - The callback function to be called when the switch is toggled.
 * @returns {ReactElement} - The rendered theme switch component.
 */
export function ThemeSwitch({ checked, onChange }: ThemeSwitchProps): ReactElement {
	const { colors } = useTheme();
	const { onColor, offColor } = generateSwitchColors(colors.primary);

	return (
		<ReactSwitch
			checked={checked}
			onChange={onChange}
			checkedIcon={<Moon size={26} />}
			uncheckedIcon={<Sun size={26} />}
			onColor={onColor}
			offColor={offColor}
		/>
	);
}
