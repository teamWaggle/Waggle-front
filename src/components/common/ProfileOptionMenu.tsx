import { useState, useRef } from "react";

import { css } from "@emotion/react";

import OptionIcon from "@/assets/svg/option.svg?react";

import { Flex } from "@/components/common";

import useClickOutSide from "@/hooks/useClickOutSide";

import { Theme } from "@/styles/Theme";

interface ProfileOptionMenuPropsType {
	handleEditMenu?: () => void;
	handleDeleteMenu?: () => void;
}

const ProfileOptionMenu = ({ handleEditMenu, handleDeleteMenu }: ProfileOptionMenuPropsType) => {
	const [menuOpen, setMenuOpen] = useState(false);

	const menuRef = useRef<HTMLUListElement>(null);

	useClickOutSide(menuRef, () => setMenuOpen(false));

	return (
		<Flex css={optionMenuBoxStyle}>
			<OptionIcon onClick={() => setMenuOpen((prev) => !prev)} />

			{menuOpen && (
				<ul ref={menuRef}>
					<li onClick={handleEditMenu}>수정하기</li>
					<li onClick={handleDeleteMenu}>삭제하기</li>
				</ul>
			)}
		</Flex>
	);
};

export default ProfileOptionMenu;

const optionMenuBoxStyle = css({
	cursor: "pointer",
	position: "absolute",
	right: 0,

	"& > ul": {
		position: "absolute",
		top: "-2px",
		left: "12px",
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
