import React from "react";
import {
  Window,
  ChannelHeader,
  MessageList,
  MessageInput,
  Thread,
} from "stream-chat-react";

const MessagingContainer = () => {
  return (
    <div className="messaging-container">
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </div>
  );
};

export default MessagingContainer;
