import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/chatSlice";
import { generateName, generateText } from "../utils/helper";
const LiveChat = () => {
  const [message, setMessage] = useState('');
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
    <div className="w-full lg:w-[35%] mt-4 lg:mt-0">
      <div className="flex flex-col-reverse w-full h-[30rem] border border-black lg:mx-5 bg-gray-100 overflow-y-scroll rounded-lg">
        {chats.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form className="flex border m-1 border-none" onSubmit={e=>{
          e.preventDefault();
          dispatch(addMessage({
              name: 'Rahul',
              message: message
          }))
          setMessage('');
      }}>
        <input
          className="border border-gray-600 my-2 mx-4 p-1 px-2 rounded-md outline-none focus:border-green-600"
          type="text"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="bg-green-800 text-white md:text-xl px-4 py-1 my-2 rounded-md">
          Next
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
