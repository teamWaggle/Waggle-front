import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { toast } from "react-toastify";

import { WaggleProvider } from "waggle-design-system";

import { RecoilRoot } from "recoil";

import { worker } from "@/mocks/browser";

import { QueryClient, QueryClientProvider, MutationCache, QueryCache } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import ModalRoot from "@/components/common/Modal/ModalRoot";
import AppRouter from "@/router/AppRouter";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
  queryCache: new QueryCache({
    onError: (error, query) => {
      console.log(error, query);
      if (query.meta?.errorMessage === false) {
        return;
      }
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
          <ModalRoot />
          <AppRouter />
        </WaggleProvider>
      </RecoilRoot>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </StrictMode>
);
