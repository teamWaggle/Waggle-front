import type { ReactNode } from "react";

import Box from "@/components/Box/Box";
import { sectionStyle } from "@/components/MainContainer/MainContainer.style";

const MainContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box tag="main" css={sectionStyle}>
      {children}
    </Box>
  );
};

export default MainContainer;
