import { useEffect } from "react";

import { useRecoilState } from "recoil";

import { Flex } from "@/components/common";
import { StoryTitle, StoryCard } from "@/components/Story";

import { useGetMemberInfoMutation } from "@/hooks/api/useGetMemberInfoMutation";
import { useStoryListQuery } from "@/hooks/api/useStoryListQuery";

import { memberIdState } from "@/recoil/atoms/auth";

import type { MemberInfoResponseType } from "@/types/auth";

const Story = () => {
	const { storyList } = useStoryListQuery(0);
	const getMemberInfoMutation = useGetMemberInfoMutation();

	const [memberId] = useRecoilState(memberIdState);

	useEffect(() => {
		getMemberInfoMutation.mutate(2, {
			onSuccess: ({ result }: MemberInfoResponseType) => {
				console.log(result);
			},
		});
	}, [memberId]);

	return (
		<Flex styles={{ gap: "20px", direction: "column", width: "100%" }}>
			<StoryTitle />
			<Flex styles={{ align: "center", wrap: "wrap", gap: "28px", width: "100%" }}>
				{storyList &&
					storyList.result.storyList.map((storyInfo) => (
						<StoryCard
							key={storyInfo.boardId}
							boardId={storyInfo.boardId}
							thumbnail={storyInfo.thumbnail}
						/>
					))}
			</Flex>
		</Flex>
	);
};

export default Story;
