import type { PropsWithChildren } from "react";
import { useRef } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

import { Box, Text } from "@/components/common";

import useClickOutSide from "@/hooks/useClickOutSide";

import type { ScheduleType } from "@/types/planning";

import {
	moreBoxStyle,
	moreTextStyle,
} from "@/components/Planning/Calendar/CalendarCard/MoreModal/MoreButton.style";
export const tempModalProvider = createContext<{
	modalValue: boolean;
	toggleButton: () => void;
}>({ modalValue: false, toggleButton: () => {} });

const ModalBox = ({ children }: PropsWithChildren) => {
	const { modalValue } = useContext(tempModalProvider);
	if (!modalValue) return null;
	return <Box>{children}</Box>;
};

interface TempButtonProps {
	schedules: ScheduleType[];
}

const MoreButton = ({ schedules, children }: PropsWithChildren<TempButtonProps>) => {
	const [modalValue, setModalValue] = useState(false);

	const toggleButton = () => {
		setModalValue((prev) => !prev);
	};

	const tempModalClose = () => {
		setModalValue(false);
	};

	const tempButtonRef = useRef(null);

	useClickOutSide(tempButtonRef, tempModalClose);
	return (
		<section ref={tempButtonRef}>
			<Box css={moreBoxStyle}>
				<tempModalProvider.Provider value={{ toggleButton, modalValue }}>
					<Text size="xSmall" onClick={toggleButton} css={moreTextStyle}>
						{schedules.length - 2}개 더보기
					</Text>
					<ModalBox>{children}</ModalBox>
				</tempModalProvider.Provider>
			</Box>
		</section>
	);
};

export default MoreButton;
