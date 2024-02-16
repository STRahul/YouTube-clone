import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/chatSlice";
import { generateName, generateText } from "../utils/helper";
const LiveChat = () => {
  const [message, setMessage] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(true);
  const dispatch = useDispatch();
  const chats = useSelector((store) => store.chat.message);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateName(),
          message: generateText(20),
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div
        className={`mt-4 lg:mt-0 border bg-gray-100 border-black rounded-lg ${
          !isChatOpen ? "hidden" : "block"
        }`}>
        <h2 className="text-center bg-black text-white py-2 relative rounded-t-lg">
          Live Chat
        </h2>

        <div className="flex flex-col-reverse w-full h-[20rem] lg:mx-5 overflow-y-scroll [&::-webkit-scrollbar]:hidden">
          {chats.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
        <form
          className="flex border m-1 border-none justify-center"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMessage({
                name: "Rahul",
                message: message,
              })
            );
            setMessage("");
          }}>
          <input
            className="border border-gray-600 my-2 mx-4 p-1 px-2 rounded-md outline-none focus:border-sky-600"
            type="text"
            placeholder="Chat..."
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="bg-gray-800 text-white md:text-xl px-4 py-1 my-2 rounded-md">
            Next
          </button>
        </form>
        <div className="flex justify-center bg-black py-2 rounded-b-lg text-white">
          <button className="w-full" onClick={() => setIsChatOpen(false)}>
            Hide Chat
          </button>
        </div>
      </div>
      {
        !isChatOpen && 
        <div className="flex h-12 justify-center bg-black py-2 rounded-lg text-white">
          <button className="w-full" onClick={() => setIsChatOpen(true)}>Show Chat</button>
        </div>
      }
    </>
  );
};

export default LiveChat;
