import { css } from "@emotion/react";

import { Box } from "@/components/common";
import SirenBio from "@/components/Siren/SirenBio/SirenBio";
import SirenMain from "@/components/Siren/SirenMain/SirenMain";
import SirenSearchBar from "@/components/Siren/SirenSearchBar/SirenSearchBar";

const SirenPage = () => {
  return (
    <Box css={boxStyle}>
      <SirenBio />
      <SirenSearchBar />
      <SirenMain />
    </Box>
  );
};

export default SirenPage;

export const boxStyle = css({
  maxWidth: "1536px",
  margin: "82px auto 0",
  padding: "0 196px",
});
