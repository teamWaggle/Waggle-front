import React from "react";
import ReactDOM from "react-dom/client";
import { Global, ThemeProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { RecoilRoot } from "recoil";

import App from "./App";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { Theme } from "@styles/Theme";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RecoilRoot>
				<ThemeProvider theme={Theme}>
					<Global styles={GlobalStyle} />
					<App />
				</ThemeProvider>
			</RecoilRoot>
			<ReactQueryDevtools initialIsOpen={true} />
		</QueryClientProvider>
	</React.StrictMode>,
);
