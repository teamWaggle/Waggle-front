import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { Global, ThemeProvider } from "@emotion/react";

import { RecoilRoot } from "recoil";

import { worker } from "@/mocks/browser";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import ModalRoot from "@/components/common/Design/Modal/ModalRoot";
import AppRouter from "@/router/AppRouter";

import { GlobalStyle } from "@/styles/GlobalStyle";
import { Theme } from "@/styles/Theme";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

if (process.env.NODE_ENV === "development") {
  await worker.start({
    serviceWorker: {
      url: "/mockServiceWorker.js",
    },
    onUnhandledRequest: "bypass",
  });
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
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
  </StrictMode>
);
