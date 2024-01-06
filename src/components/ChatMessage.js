
const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center px-3 py-2'>
         <img
          className="h-8 bg-gray-400 rounded-full"
          alt="user-logo"
          src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
        />
        <p className='font-bold px-2'>{name}</p>
        <p>{message}</p>
    </div>
  )
}

export default ChatMessage;