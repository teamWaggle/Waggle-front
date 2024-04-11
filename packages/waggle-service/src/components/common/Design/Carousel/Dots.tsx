import type { MouseEvent } from "react";

import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

interface DotsProps {
  mediaLength: number;
  selectMediaNumber: number;
  moveImage: (imgIndex: number) => void;
}

const Dots = ({ mediaLength, selectMediaNumber, moveImage }: DotsProps) => {
  return (
    <div css={dotBoxStyle}>
      {[...Array(mediaLength)].map((_, index) => (
        <button
          type="button"
          key={index}
          css={dotStyle(index === selectMediaNumber)}
          onClick={(e: MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            moveImage(index);
          }}
        />
      ))}
    </div>
  );
};

export default Dots;

const dotBoxStyle = css({
  position: "absolute",
  display: "flex",
  gap: "10px",
  left: "50%",
  bottom: "26px",
  transform: "translateX(-50%)",
  cursor: "pointer",
});

const dotStyle = (isSelected: boolean) =>
  css({
    width: "12px",
    height: "12px",
    backgroundColor: isSelected ? Theme.color.brand_primary : Theme.color.border,
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
  });
