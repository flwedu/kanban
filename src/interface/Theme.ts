export type AppThemeColors = {
	background: string;
	container: [string, string, string];
	danger: string;
	outline: string;
	primary: string;
	secondary: string;
	success: string;
	text: string;
	textAccent: string;
};

export interface AppThemeInterface {
	borderRadius: {
		none: string;
		sm: string;
		md: string;
		lg: string;
		xl: string;
		full: string;
	};
	boxShadow: {
		sm: string;
		DEFAULT: string;
		md: string;
		lg: string;
		xl: string;
		"2xl": string;
		inner: string;
		none: string;
	};
	colors: AppThemeColors;
	fontFamily: {
		body: string;
		title: string;
	};
	fontSize: {
		xs: string;
		sm: string;
		base: string;
		lg: string;
		xl: string;
		"2xl": string;
		"3xl": string;
	};
	pureColors: {
		black: string;
		darkText: string;
		lightText: string;
		white: string;
	};
	screens: {
		sm: string;
		md: string;
		lg: string;
		xl: string;
		"2xl": string;
	};
	spacing: {
		px: string;
		sm: string;
		md: string;
		base: string;
		lg: string;
		xl: string;
		"2xl": string;
	};
	title: string;
}
