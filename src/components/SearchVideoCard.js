import useGetData from "../hooks/useGetData";
import { CHANNEL_INFO_API, VIDEO_DETAILS_API } from "../utils/constants";
import { formatTimeAgo } from "../utils/formatTimeAgo";
import { abbreviateNumber } from "../utils/helper";

const SearchVideoCard = ({ info }) => {
  const { snippet } = info;
  const { thumbnails, channelTitle, title, publishedAt, channelId } = snippet;
  const { data: channelData } = useGetData(CHANNEL_INFO_API + "&id=" + channelId, channelId);
  const { data: videoDetails } = useGetData(VIDEO_DETAILS_API + "&id=" + info?.id?.videoId);
  const channelPicture = channelData?.[0]?.snippet?.thumbnails?.default?.url ||
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5958mvxyOALrWelcizzxdX48KqChi9Vh2Sr_NETQ&s';
  const viewCount = abbreviateNumber(videoDetails?.[0]?.statistics?.viewCount);
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
        <div className="flex">
          <span className="pl-2">{viewCount} views</span>
          <p className="before:content-['•'] before:mx-1">
            {formatTimeAgo(publishedAt)}
          </p>
        </div>
        <div className="flex items-center py-2">
          <img className="h-10 rounded-full" src={channelPicture} alt="user-logo" />
          <h2 className="px-2 p-3 font-medium">{channelTitle}</h2>
        </div>
      </div>
    </div>
  );
};
export default SearchVideoCard;
