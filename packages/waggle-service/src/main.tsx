import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { toast } from "react-toastify";

import { Global } from "@emotion/react";

import { WaggleProvider } from "waggle-design-system";

import { RecoilRoot } from "recoil";

import { QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import ModalRoot from "@/components/common/Design/Modal/ModalRoot";
import AppRouter from "@/router/AppRouter";

import { GlobalStyle } from "@/styles/GlobalStyle";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      console.log(error);

      toast.error(error.name);
    },
  }),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <WaggleProvider>
          <Suspense fallback={<div></div>}>
            <Global styles={GlobalStyle} />
            <ModalRoot></ModalRoot>
            <AppRouter />
          </Suspense>
        </WaggleProvider>
      </RecoilRoot>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </React.StrictMode>
);
