import React, { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import { Chat, Channel, Window } from "stream-chat-react";

import Auth from "./components/Auth";
import "@stream-io/stream-chat-css/dist/css/index.css";
import MessagingContainer from "./components/MessagingContainer";
import Video from "./components/Video";

const filters = { type: "messaging" };
const options = { state: true, presence: true, limit: 10 };
const sort = { last_message_at: -1 };

const client = StreamChat.getInstance("xbcme9esbhgq");

const App = () => {
  const [clientReady, setClientReady] = useState(false);
  const [channel, setChannel] = useState(false);

  const authToken = false;

  useEffect(() => {
    const setupClient = async () => {
      try {
        await client.connectUser(
          {
            id: "dave-matthews",
            name: "Dave Matthews",
          },
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZGF2ZS1tYXR0aGV3cyJ9.QL197pc5tDswBCvg7MVyBH2p8xN8gNbVHJEC4IiDqgw"
        );
        const channel = await client.channel("gaming", "gaming-demo", {
          name: "Gaming Demo",
        });
        setChannel(channel);
        setClientReady(true);
      } catch (err) {
        console.log(err);
      }
    };

    setupClient();
  }, []);

  if (!clientReady) return null;

  const customStyles = {
    "--primary-color": "green",
    "--md-font": "1.2rem",
    "--xs-m": "1.2rem",
    "--xs-p": "1.2rem",
  };

  return (
    <>
      {!authToken && <Auth />}
      {authToken && (
        <Chat client={client} customStyles={customStyles}>
          <Channel channel={channel}>
            <Video />
            <MessagingContainer />
          </Channel>
        </Chat>
      )}
    </>
  );
};

export default App;
