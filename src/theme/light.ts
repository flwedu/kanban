import { AppThemeInterface } from "../interface/Theme.ts";
import { baseTheme } from "./base.ts";

export const lightTheme: AppThemeInterface = {
	title: "light",
	colors: {
		background: "#f9fafb",
		container: ["#e5e7eb", "#d1d5db", "#9ca3af"],
		danger: "#be123c",
		outline: "#374151",
		primary: "#3E6990",
		secondary: "#E9E3B4",
		success: "#047857",
		text: "#18181b",
		textAccent: "#27272a",
	},
	...baseTheme,
};
