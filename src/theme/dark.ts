import { AppThemeInterface } from "../interface/Theme.ts";
import { baseTheme } from "./base.ts";

export const darkTheme: AppThemeInterface = {
	title: "dark",
	colors: {
		background: "#111111",
		container: ["#191919", "#222222", "#2A2A2A"],
		danger: "#500F1C",
		outline: "#606060",
		primary: "#5B5BD6",
		secondary: "#313131",
		success: "#28684A",
		text: "#EEEEEE",
		textAccent: "#B4B4B4",
	},
	...baseTheme,
};
