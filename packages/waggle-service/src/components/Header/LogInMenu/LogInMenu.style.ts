import { css, keyframes } from "@emotion/react";

const fadeIn = keyframes`
    from {
      transform: translateX(400%);
    }
    to {
      transform: translateX(0%);
    }    
  `;

const fadeOut = keyframes`
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(400%);
    }   
  `;

export const layoutStyle = css({
  alignItems: "center",
  gap: "10px",

  "& > svg": {
    cursor: "pointer",
  },
});

export const notiBoxStyle = (isFadeIn: boolean) =>
  css({
    animation: isFadeIn ? `${fadeIn} 0.2s ease-in` : `${fadeOut} 0.2s ease-in`,
  });
