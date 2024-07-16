import type { PropsWithChildren, ReactElement } from "react";

import { render, type RenderOptions } from "@testing-library/react";

import WaggleProvider from "@/WaggleProvider";

const RenderWithProviders = ({ children }: PropsWithChildren) => {
  return <WaggleProvider>{children}</WaggleProvider>;
};

function customRender(ui: ReactElement, options?: RenderOptions) {
  render(ui, { wrapper: RenderWithProviders, ...options });
}

export default customRender;
