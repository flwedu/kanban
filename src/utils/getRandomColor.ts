import { theme } from "../theme/theme.ts";

const availableColors = theme.colors;
const colorEntries = Object.entries(availableColors).filter(([key]) => key !== "white" && key !== "black");

export function getRandomColor() {
	const randomIndex = Math.floor(Math.random() * colorEntries.length);
	const [colorName, colorValue] = colorEntries[randomIndex];
	return { colorName, colorValue };
}
