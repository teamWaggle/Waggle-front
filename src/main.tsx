import React from "react";
import ReactDOM from "react-dom/client";
import { Global, ThemeProvider } from "@emotion/react";

import App from "./App";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { Theme } from "@styles/Theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider theme={Theme}>
			<Global styles={GlobalStyle} />
			<App />
		</ThemeProvider>
	</React.StrictMode>,
);
