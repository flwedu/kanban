import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
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
				<DndProvider backend={HTML5Backend}>
					<GlobalStyles />
					<App />
				</DndProvider>
			</ThemeProvider>
		</RecoilRoot>
	</React.StrictMode>,
);
