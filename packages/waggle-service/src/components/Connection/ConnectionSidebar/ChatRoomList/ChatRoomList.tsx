import { Fragment } from "react";

import { Flex } from "waggle-design-system";

import ChatRoomItem from "@/components/Connection/ConnectionSidebar/ChatRoomList/ChatRoomItem";
import ChatRoomItemTitle from "@/components/Connection/ConnectionSidebar/ChatRoomList/ChatRoomItemTitle";
import EmptyChatRoomList from "@/components/Connection/ConnectionSidebar/EmptyChatRoomList/EmptyChatRoomList";

import { useMemberChatRoomListQuery } from "@/hooks/api/chat/useMemberChatRoomListQuery";
import useObserver from "@/hooks/common/useObserver";

const ChatRoomList = () => {
  const { memberChatRoomListData, fetchNextPage, hasNextPage, isFetching } =
    useMemberChatRoomListQuery();

  const ref = useObserver(async (entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  if (memberChatRoomListData.pages[0].result.chatRooms.length === 0) {
    return <EmptyChatRoomList />;
  }

  return (
    <Flex styles={{ direction: "column", gap: "12px" }}>
      <ChatRoomItemTitle />
      {memberChatRoomListData.pages.map((chatRoomListData) => (
        <Fragment key={chatRoomListData.result.nextPageParam}>
          {chatRoomListData.result.chatRooms.map((chatRoomInfo) => (
            <ChatRoomItem key={chatRoomInfo.id} memberChatRoomInfo={chatRoomInfo} />
          ))}
        </Fragment>
      ))}
      <div ref={ref} />
    </Flex>
  );
};

export default ChatRoomList;
