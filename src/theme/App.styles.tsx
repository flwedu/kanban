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
		color: ${({ theme }) => theme.colors.text};
		font-family: ${({ theme }) => theme.fontFamily.body};
		background-color: ${({ theme }) => theme.colors.background};
		background-image: radial-gradient(${({ theme }) => theme.colors.primary} 1px, ${({ theme }) => theme.colors.background} 1px);
		background-size: 20px 20px;
	}
`;
