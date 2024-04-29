import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";

import { WaggleProvider } from "waggle-design-system";
import { Global, ThemeProvider } from "@emotion/react";

import { RecoilRoot } from "recoil";

import { worker } from "@/mocks/browser";

import { QueryClient, QueryClientProvider, MutationCache, QueryCache } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import ModalRoot from "@/components/common/Design/Modal/ModalRoot";
import AppRouter from "@/router/AppRouter";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { Theme } from "@/styles/Theme";
import { toast } from "react-toastify";
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
  queryCache: new QueryCache({
    onError: (error, query) => {
      if (query.meta?.errorMessage) {
        return toast.error(query.meta.errorMessage as string);
      }
      toast.error(error.message);
    },
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      toast.error(error.message);
    },
  }),
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
        <WaggleProvider>
          <ThemeProvider theme={Theme}>
            <Global styles={GlobalStyle} />
            <Suspense fallback={<div></div>}>
              <ModalRoot />
              <AppRouter />
            </Suspense>
          </ThemeProvider>
        </WaggleProvider>
      </RecoilRoot>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </StrictMode>
);
