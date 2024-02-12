import { Moon, Sun } from "lucide-react";
import { darken, lighten } from "polished";
import ReactSwitch from "react-switch";
import { useTheme } from "styled-components";

export interface ThemeSwitchProps {
	checked: boolean;
	onChange: (checked: boolean) => void;
}

export function ThemeSwitch({ checked, onChange }: ThemeSwitchProps) {
	const { colors } = useTheme();
	const darkColor = darken(0.1, colors.primary);
	const lightColor = lighten(0.1, colors.primary);

	return (
		<ReactSwitch
			checked={checked}
			onChange={onChange}
			checkedIcon={<Moon size={26} />}
			uncheckedIcon={<Sun size={26} />}
			onColor={darkColor}
			offColor={lightColor}
		/>
	);
}
