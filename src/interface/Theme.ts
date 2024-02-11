export type AppThemeColors = {
	primary: string;
	secondary: string;
	text: string;
	background: string;
	container: [string, string, string];
	textAccent: string;
	outline: string;
	success: string;
	danger: string;
}

export interface AppThemeInterface {
	title: string;
	colors: AppThemeColors;
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
	fontSize: {
		xs: string;
		sm: string;
		base: string;
		lg: string;
		xl: string;
		"2xl": string;
		"3xl": string;
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
	}
}
