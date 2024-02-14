import React, { useState } from "react";
import { abbreviateNumber } from "../utils/helper";
import { formatDuration } from "../utils/formatDuration";
import { formatTimeAgo } from "../utils/formatTimeAgo";

const VideoCard = ({ info }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { snippet, statistics, contentDetails } = info;
  const { thumbnails, channelTitle, title, publishedAt } = snippet;
  const views = abbreviateNumber(statistics?.viewCount);
  return (
    <div
      className="flex flex-col gap-2 p-3 m-2"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}>
      <div className="relative">
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center cursor-pointer justify-center rounded-2xl">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${info?.id}?autoplay=1&mute=1`}
              title={title}
              frameBorder="0"
              allowFullScreen
              autoPlay
              className="rounded-xl"></iframe>
          </div>
        )}
        <img
          className="rounded-xl relative -z-10 w-full"
          alt="thumbnail"
          src={thumbnails.medium.url}
        />
        <div className="absolute bottom-5 mx-5 right-1 bg-secondary-dark text-secondary text-sm px-0.5 rounded">
          {formatDuration(contentDetails.duration)}
        </div>
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
