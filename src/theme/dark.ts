import { AppThemeInterface } from "../interface/Theme.ts";
import { baseTheme } from "./base.ts";

export const darkTheme: AppThemeInterface = {
	title: "dark",
	colors: {
		background: "#111827",
		container: ["#1f2937", "#374151", "#4b5563"],
		danger: "#be123c",
		outline: "#6b7280",
		primary: "#3E6990",
		secondary: "#E9E3B4",
		success: "#047857",
		text: "#f9fafb",
		textAccent: "#e5e7eb",
	},
	...baseTheme,
};
