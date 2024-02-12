import { AppThemeInterface } from "../interface/Theme.ts";

export const baseTheme: Omit<AppThemeInterface, "colors" | "title"> = {
	borderRadius: {
		none: "0px",
		sm: "0.125rem",
		md: "0.375rem",
		lg: "0.5rem",
		xl: "0.75rem",
		full: "9999px",
	},
	boxShadow: {
		sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
		DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
		md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
		lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
		xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
		"2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
		inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
		none: "none",
	},
	fontFamily: {
		title: "'Poppins', sans-serif",
		body: "'Inter', sans-serif",
	},
	fontSize: {
		xs: "0.5rem",
		sm: "0.875rem",
		base: "1rem",
		lg: "1.5rem",
		xl: "1.875rem",
		"2xl": "2rem",
		"3xl": "2.5rem",
	},
	pureColors: {
		black: "#000000",
		white: "#FFF",
		darkText: "#EEEEEE",
		lightText: "#202020",
	},
	screens: {
		sm: "640px",
		md: "768px",
		lg: "1024px",
		xl: "1280px",
		"2xl": "1536px",
	},
	spacing: {
		px: "1px",
		sm: "0.25rem",
		md: "0.5rem",
		base: "1rem",
		lg: "1.25rem",
		xl: "1.5rem",
		"2xl": "2rem",
	},
};
