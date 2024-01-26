import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
	}

	:root {
		font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
		line-height: 1.5;
		font-weight: 400;

		color-scheme: light dark;
		color: ${({ theme }) => theme.colors.coolGray["50"]};
		background-color: ${({ theme }) => theme.colors.gray["900"]};

		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	#root {
		max-width: 1280px;
		margin: 0 auto;
		padding: 2rem;
		text-align: center;
	}

	a {
		font-weight: 500;
		color: #646cff;
		text-decoration: inherit;
	}

	a:hover {
		color: #535bf2;
	}

	body {
		margin: 0;
		display: flex;
		place-items: center;
		min-width: 320px;
		min-height: 100vh;
	}

	h1 {
		font-size: 3.2em;
		line-height: 1.1;
	}

	@media (prefers-color-scheme: light) {
		:root {
			color: ${({ theme }) => theme.colors.gray["900"]};
			background-color: ${({ theme }) => theme.colors.coolGray["50"]};
		}
	}

`;