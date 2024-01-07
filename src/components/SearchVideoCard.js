
const SearchVideoCard = ({ info }) => {
  const { snippet } = info;
  const { thumbnails, channelTitle, title } = snippet;
  return (
    <div className="flex md:p-3 md:gap-3 mx-4 flex-col md:flex-row">
      <div className="md:p-3 m-2">
        <img
          className="rounded-xl shadow hover:rounded-none hover:scale-105 duration-200"
          alt="thumbnail"
          src={thumbnails.medium.url}
        />
      </div>
      <div className="md:p-4 md:w-[60%]">
        <h1 className="p-1 font-medium text-lg md:text-2xl break-words">
          {title}
        </h1>
        <div className="flex items-center">
          <img className="h-6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5958mvxyOALrWelcizzxdX48KqChi9Vh2Sr_NETQ&s" alt="user-logo" />
          <h2 className="px-2 p-3 font-medium">{channelTitle}</h2>
        </div>
      </div>
    </div>
  );
};
export default SearchVideoCard;
