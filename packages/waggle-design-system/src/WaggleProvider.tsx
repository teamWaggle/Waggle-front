import type { PropsWithChildren } from "react";

import { Global, ThemeProvider } from "@emotion/react";

import { GlobalStyle } from "@/styles/GlobalStyle";
import { Theme } from "@/styles/Theme";

type WaggleProviderProps = PropsWithChildren;

const WaggleProvider = ({ children }: WaggleProviderProps) => (
  <ThemeProvider theme={Theme}>
    <Global styles={GlobalStyle} />
    {children}
  </ThemeProvider>
);

export default WaggleProvider;
