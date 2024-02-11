import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
	}

	:root {
		font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
		line-height: 1.5;
		font-weight: 400;

		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	a {
		font-weight: 500;
		color: #646cff;
		text-decoration: inherit;
	}

	a:hover {
		color: #535bf2;
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
		background-color: ${({ theme }) => theme.colors.background};
		color: ${({ theme }) => theme.colors.text};
	}

	h1 {
		font-size: 3.2em;
		line-height: 1.1;
	}
`;
