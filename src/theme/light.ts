import { AppThemeInterface } from "../interface/Theme.ts";
import { baseTheme } from "./base.ts";

export const lightTheme: AppThemeInterface = {
	title: "light",
	colors: {
		background: "#FCFCFC",
		container: ["#F9F9F9", "#F0F0F0", "#E8E8E8"],
		danger: "#be123c",
		outline: "#BBBBBB",
		primary: "#5B5BD6",
		secondary: "#E0E0E0",
		success: "#047857",
		text: "#202020",
		textAccent: "#646464",
	},
	...baseTheme,
};
