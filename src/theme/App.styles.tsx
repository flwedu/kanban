import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
	}

	:root {
		line-height: 1.5;
		font-weight: 400;
		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	#root {
		margin: 0;
		width: 100vw;
		height: 100vh
	}

	body {
		margin: 0;
		display: flex;
		place-items: start;
		background-size: 20px 20px;
	}
`;
