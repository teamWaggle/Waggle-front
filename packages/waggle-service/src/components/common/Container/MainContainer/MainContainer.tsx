import type { ReactNode } from "react";

import Box from "@/components/common/Design/Box/Box";

import { sectionStyle } from "@/components/common/Container/MainContainer/MainContainer.style";

const MainContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box tag="main" css={sectionStyle}>
      {children}
    </Box>
  );
};

export default MainContainer;
