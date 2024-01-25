import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import App from "./App.tsx";
import { GlobalStyles } from "./theme/App.styles.tsx";
import { theme } from "./theme/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RecoilRoot>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<App />
			</ThemeProvider>
		</RecoilRoot>
	</React.StrictMode>,
);
