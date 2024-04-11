import { useState, useRef } from "react";

import { css } from "@emotion/react";

import OptionIcon from "@/assets/svg/option.svg?react";

import useClickOutSide from "@/hooks/useClickOutSide";

import { Theme } from "@/styles/Theme";

interface ProfileOptionMenuParams {
  handleEditMenu?: () => void;
  handleDeleteMenu?: () => void;
  isLeft?: boolean;
  isPet?: boolean;
}

const ProfileOptionMenu = ({
  handleEditMenu,
  handleDeleteMenu,
  isLeft,
  isPet,
}: ProfileOptionMenuParams) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutSide(menuRef, () => setMenuOpen(false));

  return (
    <div css={optionMenuBoxStyle(isLeft, isPet)} ref={menuRef}>
      <OptionIcon onClick={() => setMenuOpen((prev) => !prev)} />

      {menuOpen && (
        <ul>
          <li onClick={handleEditMenu}>수정하기</li>
          <li onClick={handleDeleteMenu}>삭제하기</li>
        </ul>
      )}
    </div>
  );
};

export default ProfileOptionMenu;

const optionMenuBoxStyle = (isLeft?: boolean, isPet?: boolean) =>
  css({
    cursor: "pointer",
    position: "absolute",
    right: isPet ? "20px" : 0,

    "& > ul": {
      position: "absolute",
      top: "-2px",
      left: !isLeft ? "12px" : "auto",
      right: isLeft ? "12px" : "auto",
      width: "63px",
      border: `1px solid ${Theme.color.border}`,
      borderRadius: "2px",

      "& > li": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "10px",
        fontWeight: 600,
        backgroundColor: Theme.color.white,
        color: Theme.color.text,
        height: "22px",

        "&:last-of-type": {
          borderTop: `1px solid ${Theme.color.border}`,
        },
      },
    },
  });
