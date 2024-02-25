import { Switch, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import { Moon, Sun } from "lucide-react";
import { ComponentProps, ReactElement } from "react";

/**
 * Renders a theme switch component with a moon and sun icon,
 * allowing users to toggle between light and dark themes.
 *
 * @returns {ReactElement} - The rendered theme switch component.
 */
export function ThemeSwitch(): ReactElement {
	const theme = useMantineTheme();
	const { colorScheme, setColorScheme } = useMantineColorScheme();

	const onChange: ComponentProps<typeof Switch>["onChange"] = (e) => {
		setColorScheme(e.target.checked ? "dark" : "light");
	};

	return (
		<Switch
			size="md"
			color="dark.4"
			checked={colorScheme === "dark"}
			onChange={onChange}
			onLabel={<Moon size={20} color={theme.colors.blue[5]} />}
			offLabel={<Sun size={20} color={theme.colors.yellow[5]} />}
		/>
	);
}
