import React from "react";
import ReactDOM from "react-dom/client";

import { Global, ThemeProvider } from "@emotion/react";

import { RecoilRoot } from "recoil";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import ModalRoot from "@/components/common/Modal/ModalRoot";
import AppRouter from "@/router/AppRouter";

import { GlobalStyle } from "@/styles/GlobalStyle";
import { Theme } from "@/styles/Theme";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RecoilRoot>
				<ThemeProvider theme={Theme}>
					<Global styles={GlobalStyle} />
					<ModalRoot></ModalRoot>
					<AppRouter />
				</ThemeProvider>
			</RecoilRoot>
			<ReactQueryDevtools initialIsOpen={true} />
		</QueryClientProvider>
	</React.StrictMode>,
);
