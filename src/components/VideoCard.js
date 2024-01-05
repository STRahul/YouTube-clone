import React from "react";
import { abbreviateNumber } from "../utils/helper";
import { formatDuration } from "../utils/formatDuration";
import { formatTimeAgo } from "../utils/formatTimeAgo";

const VideoCard = ({ info }) => {
  const { snippet, statistics, contentDetails } = info;
  const { thumbnails, channelTitle, title, publishedAt } = snippet;
  const views = abbreviateNumber(statistics?.viewCount);
  return (
    <div className="relative flex flex-col gap-2 p-3 m-2 group">
      <img
        className="rounded-xl group-hover:rounded-none group-hover:scale-105 duration-200"
        alt="thumbnail"
        src={thumbnails.medium.url}
      />
      <div className="absolute bottom-36 mx-5 right-1 bg-secondary-dark text-secondary text-sm px-0.5 rounded">
        {formatDuration(contentDetails.duration)}
      </div>
      <div className="flex gap-1">
        <img
          className="h-10 mt-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5958mvxyOALrWelcizzxdX48KqChi9Vh2Sr_NETQ&s"
          alt="user-logo"
        />
        <div>
          <h1 className="w-[100%] p-1 font-bold line-clamp-2">{title}</h1>
          <h2 className="px-2 font-medium">{channelTitle}</h2>
          <div className="flex">
            <h2 className="px-2">{views} views</h2>
            <p className="before:content-['•'] before:mx-1">
              {formatTimeAgo(publishedAt)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
