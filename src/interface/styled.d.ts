declare module "styled-components" {
	/* eslint-disable no-unused-vars */
	type ColorsNames =
		| "rose"
		| "pink"
		| "fuchsia"
		| "purple"
		| "violet"
		| "indigo"
		| "blue"
		| "sky"
		| "cyan"
		| "teal"
		| "emerald"
		| "green"
		| "lime"
		| "yellow"
		| "amber"
		| "orange"
		| "red"
		| "warmGray"
		| "trueGray"
		| "gray"
		| "coolGray"
		| "blueGray";

	type ColorsVariations = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

	type MainColors = {
		black: string;
		white: string;
	};

	type Colors = MainColors &
		Record<
			ColorsNames,
			{
				[K in ColorsVariations]: string;
			}
		>;

	type BorderRadius = {
		none: string;
		sm: string;
		DEFAULT: string;
		md: string;
		lg: string;
		xl: string;
		"2xl": string;
		"3xl"?: string;
		full?: string;
		inner?: string;
	};

	type BorderWidth = {
		"0": string;
		"2": string;
		"4": string;
		"8": string;
		DEFAULT: string;
	};

	type FontSize = {
		xs: string;
		sm: string;
		base: string;
		lg: string;
		xl: string;
		"2xl": string;
		"3xl": string;
		"4xl": string;
		"5xl": string;
		"6xl": string;
		"7xl": string;
		"8xl": string;
		"9xl": string;
	};

	type LineHeight = {
		"3": string;
		"4": string;
		"5": string;
		"6": string;
		"7": string;
		"8": string;
		"9": string;
		"10": string;
		none: string;
		tight: string;
		snug: string;
		normal: string;
		relaxed: string;
		loose: string;
	};

	type Screens = {
		sm: string;
		md: string;
		lg: string;
		xl: string;
		"2xl": string;
	};

	type Spacing = {
		"0": string;
		"1": string;
		"2": string;
		"3": string;
		"4": string;
		"5": string;
		"6": string;
		"7": string;
		"8": string;
		"9": string;
		"10": string;
		"11": string;
		"12": string;
		"14": string;
		"16": string;
		"20": string;
		"24": string;
		"28": string;
		"32": string;
		"36": string;
		"40": string;
		"44": string;
		"48": string;
		"52": string;
		"56": string;
		"60": string;
		"64": string;
		"72": string;
		"80": string;
		"96": string;
		px: string;
		"0.5": string;
		"1.5": string;
		"2.5": string;
		"3.5": string;
	};

	export interface DefaultTheme {
		borderRadius: BorderRadius;
		borderWidth: BorderWidth;
		boxShadow: BorderRadius;
		colors: Colors;
		fontSize: FontSize;
		lineHeight: LineHeight;
		screens: Screens;
		spacing: Spacing;
	}
}

export {};
