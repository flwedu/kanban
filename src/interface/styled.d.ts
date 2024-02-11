import { AppThemeInterface } from "./Theme.ts";

declare module "styled-components" {
	export interface DefaultTheme extends AppThemeInterface {}
}

export {};
