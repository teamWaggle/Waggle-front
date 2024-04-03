import { useState, useEffect, useRef, useCallback } from "react";

import LeftArrowIcon from "@/assets/svg/left-arrow.svg?react";
import RightArrowIcon from "@/assets/svg/right-arrow.svg?react";

import { Divider, Flex, Heading } from "@/components/common";
import SirenCard from "@/components/Siren/SirenCard/SirenCard";

import { useSirenListQuery } from "@/hooks/api/siren/useSirenListQuery";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import {
	layoutStyle,
	sliderBoxStyle,
	sliderLayoutStyle,
	sliderStyle,
	arrowBoxStyle,
} from "@/components/MyPage/MyPageSiren/MyPageSiren.style";

const MyPageSiren = () => {
	const { sirenListData } = useSirenListQuery(0);

	const wrapRef = useRef<HTMLDivElement>(null);

	const [isShowLeftArrow, setIsShowLeftArrow] = useState<boolean | null>(false);
	const [isShowRightArrow, setIsShowRightArrow] = useState<boolean | null>(true);

	useEffect(() => {
		if (!wrapRef.current) return;

		if (wrapRef.current.clientWidth === wrapRef.current.scrollWidth) {
			setIsShowLeftArrow(null);
			setIsShowRightArrow(null);
		}
	}, []);

	const handleLeftArrowClick = useCallback(() => {
		const wrap = wrapRef.current;

		if (wrap === null) return;

		wrap.scrollBy({
			left: -789,
			behavior: "smooth",
		});
	}, []);

	const handleRightArrowClick = useCallback(() => {
		const wrap = wrapRef.current;

		if (wrap === null) return;

		wrap.scrollBy({
			left: 789,
			behavior: "smooth",
		});
	}, []);

	const handleGalleryScroll = useCallback(() => {
		if (!wrapRef.current) return;

		if (wrapRef.current.scrollLeft === 0) {
			setIsShowLeftArrow(false);
			setIsShowRightArrow(true);
		} else if (
			wrapRef.current.scrollWidth <=
			wrapRef.current.scrollLeft + wrapRef.current.clientWidth
		) {
			setIsShowLeftArrow(true);
			setIsShowRightArrow(false);
		} else {
			setIsShowLeftArrow(true);
			setIsShowRightArrow(true);
		}
	}, []);

	return (
		<Flex tag="main" css={layoutStyle}>
			<Heading size="small" css={getDefaultTextStyle(Theme.color.text, 700)}>
				Siren
			</Heading>

			<div css={sliderLayoutStyle}>
				<div
					css={sliderBoxStyle(sirenListData.result.sirenList.length)}
					ref={wrapRef}
					onScroll={handleGalleryScroll}
				>
					<div css={sliderStyle}>
						{sirenListData.result.sirenList.map((sirenInfo) => (
							<SirenCard
								key={sirenInfo.boardId}
								boardId={sirenInfo.boardId}
								thumbnail={sirenInfo.thumbnail}
								title={sirenInfo.title}
								lostLocate={sirenInfo.lostLocate}
								recommendCount={sirenInfo.recommendCount}
								category={sirenInfo.category}
								status={sirenInfo.status}
								createdDate={sirenInfo.createdDate}
								isMyPage
							/>
						))}
					</div>
				</div>

				{isShowLeftArrow !== null && isShowLeftArrow && (
					<button css={arrowBoxStyle} className="leftArrow" onClick={handleLeftArrowClick}>
						<LeftArrowIcon width={16} height={16} />
					</button>
				)}

				{isShowRightArrow !== null && isShowRightArrow && (
					<button css={arrowBoxStyle} className="rightArrow" onClick={handleRightArrowClick}>
						<RightArrowIcon width={16} height={16} />
					</button>
				)}
			</div>

			<Divider />

			<Heading size="small" css={getDefaultTextStyle(Theme.color.text, 700)}>
				댓글
			</Heading>
		</Flex>
	);
};

export default MyPageSiren;
