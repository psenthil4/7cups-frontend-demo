import React, { useEffect, useRef } from "react";

import "./ChatRoom.css";
import useChat from "../useChat";

const ChatRoom = (props, props2) => {
  const { roomId, userId } = props.match.params;
  const { userID } = props2;
  const { messages, sendMessage } = useChat(roomId);
  const [newMessage, setNewMessage] = React.useState("");
  const suggestions = ["nice message", "click this", "howdy"]
  const messageRef = useRef()
  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
  };

  console.log(userId)

  // useEffect(() => {
  //   messageRef?.current.scrollIntoView({behavior: "smooth"})
  // }, [messages])

  return (
    <>
      <div className="chat">
        <header className="chat__header">
          <div className="chat__header-container">
            <div className="chat__header-item">
              <div className="chat__item-group">
                <div><img src="/user_logo.png" alt="user logo" /></div>
                <h5>{userId === "client8" ? "Listener" : userId === "listener7" ? "Client" : ""}</h5>
              </div>
            </div>
            {userId === "client8" && <div className="chat__header-item">
              <div className="chat__item-group">
                <button className="chat__button">clear session</button>
                <button className="chat__button">dump logs</button>
              </div>
            </div>}

          </div>
        </header>
        <section className="chat__body">
          <div className="chat__body-container" >
            <ol className="chat__messages-list">
              {
                messages.map((message, i) => (
                  <li
                    key={i}
                    ref={messageRef}
                    className={`chat__message-item ${message.ownedByCurrentUser ? "my-message" : "received-message"
                      }`}
                  >
                    {message.body}
                  </li>
                ))}
            </ol>
          </div>
        </section>
        <section className="chat__suggestion">
          {userId === "listener7" && <div className="chat__suggestion-container">
            <div className="chat__suggestion-group">
              {suggestions.map(i => (<button className="chat__suggestion-button">{i}</button>))}
            </div>
          </div>}

        </section>
        <section className="chat__input">
          <div className="chat__input-wrapper">
            <input value={newMessage}
              onChange={handleNewMessageChange}
              placeholder="Write message..." />
            <button onClick={handleSendMessage} className="submit__icon">
              <img src="/send_button.png" alt="send button" />
            </button>
          </div>
        </section>
      </div>
    </>
    // <div className="chat-room-container">
    //   <h1 className="room-name">Room: {roomId}</h1>
    //   <h1 className="chat-ID">User ID: {userID}</h1>
    //   <div className="messages-container">
    //     <ol className="messages-list">
    // {messages.map((message, i) => (
    //   <li
    //     key={i}
    //     className={`message-item ${
    //       message.ownedByCurrentUser ? "my-message" : "received-message"
    //     }`}
    //   >
    //     {message.body}
    //   </li>
    // ))}
    //     </ol>
    //   </div>
    //   <textarea
    // value={newMessage}
    // onChange={handleNewMessageChange}
    // placeholder="Write message..."
    //     className="new-message-input-field"
    //   />
    //   <button onClick={handleSendMessage} className="send-message-button">
    //     Send
    //   </button>
    // </div>
  );
};

export default ChatRoom;
