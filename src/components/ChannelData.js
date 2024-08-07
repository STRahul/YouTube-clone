
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { BiLike, BiDislike } from 'react-icons/bi'
import { BiSolidLike, BiSolidDislike } from 'react-icons/bi'
import { CiBellOn } from 'react-icons/ci'
import { PiShareFat, PiDotsThreeBold } from 'react-icons/pi'
import { MdOutlineDownloading } from 'react-icons/md'
import { HiOutlineChevronDown } from 'react-icons/hi2'
import { CHANNEL_INFO_API, VIDEO_DETAILS_API } from '../utils/constants'
import { abbreviateNumber } from '../utils/helper';
import { formatTimeAgo } from '../utils/formatTimeAgo';
import useGetData from '../hooks/useGetData';

const ChannelData = ({ videoId }) => {
  const [subscribe, setSubscribe] = useState(false);
  const [like, setLike] = useState(true)
  const [disLike, setDisLike] = useState(true)
  const [showMore, setShowMore] = useState(false);

  const { data: videoDetails, error: videoError } = useGetData(VIDEO_DETAILS_API + '&id=' + videoId, videoId)
  const videoData = videoDetails?.[0] || {};

  const { data: channelData, error: channelError } = useGetData(CHANNEL_INFO_API + '&id=' + videoData?.snippet?.channelId, videoData?.snippet?.channelId);

  const likeCount = abbreviateNumber(videoData?.statistics?.likeCount);
  const viewCount = abbreviateNumber(videoData?.statistics?.viewCount);
  const calender = formatTimeAgo(videoData?.snippet?.publishedAt);
  const subScribers = channelData?.[0]?.statistics?.subscriberCount || ''; 
  const channelPicture = channelData?.[0]?.snippet?.thumbnails?.default?.url || 
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5958mvxyOALrWelcizzxdX48KqChi9Vh2Sr_NETQ&s';
  const subscriberCount = abbreviateNumber(subScribers);


  const handleLikeToggle = () => {
    setLike(!like);
    setDisLike(true);
  };

  const handleDisLikeToggle = () => {
    setDisLike(!disLike);
    setLike(true);
  };

  if(videoError || channelError){
    return (
      <p className="mx-auto my-3 text-center text-2xl font-bold">
        {'Could not fetch Video Data.'}
      </p>
    );
  }

  return (
    <div className='flex flex-col my-2 gap-3'>
      <div className='font-bold max-sm:text-justify text-lg max-sm:mx-1'>
        <h2>{videoData?.snippet?.title} </h2>
      </div>
      <div className='flex flex-wrap items-center justify-between max-sm:gap-5 '>
        <div className='flex items-center gap-5 max-sm:w-full max-sm:justify-between'>
          <div className='flex items-center gap-2'>
            <img src={channelPicture} alt='ChannelProfile' className='rounded-full w-12 max-sm:w-10' />
            <div className='flex flex-col'>
              <span className='font-bold max-sm:text-sm'>{videoData?.snippet?.channelTitle}</span>
              <span className='text-xs text-gray-500'>{subscriberCount} Subscribers</span>
            </div>
          </div>
          <button className='rounded-full'
            onClick={() => setSubscribe(!subscribe)}
          >
            {subscribe ? (
              <div className='flex items-center gap-1 max-sm:gap-2 py-[5px] max-sm:py-[7px] px-2 max-sm:px-5 bg-gray-100 rounded-full'>
                <CiBellOn className='text-black text-2xl animate-pulse' />
                <span className='max-sm:hidden text-sm'>Subscribed</span>
                <HiOutlineChevronDown className='text-black text-xl ' />
              </div>
            ) : (
              <div className='flex py-[7px] max-sm:py-[8px] px-5 bg-black text-white rounded-full'>
                <span className='max-sm:text-sm text-sm'>Subscribe</span>
              </div>
            )}
          </button>
        </div>
        <div className='flex items-center lg:gap-5 md:gap-3 max-sm:gap-2 max-sm:text-sm max-sm:w-full max-sm:justify-between'>
          <div className='flex items-center bg-gray-100 rounded-full cursor-pointer'>
            <div className='flex items-center gap-2 hover:bg-gray-200 hover:rounded-l-full py-[5px] px-3' onClick={handleLikeToggle}>
              {
                like ? (
                  <BiLike className='text-gray-500 bg-transparent text-xl cursor-pointer' />
                ) : (
                  <BiSolidLike className='text-black bg-transparent text-xl cursor-pointer' />
                )
              }
              <span className='text-sm'>{likeCount}</span>
            </div>
            <div className='p-[0.5px] h-6 bg-gray-400'>

            </div>
            <div className='hover:bg-gray-200 hover:rounded-r-full py-[7px] px-2' onClick={handleDisLikeToggle}>
              {
                disLike ? (
                  <BiDislike className='text-gray-500 bg-transparent text-xl cursor-pointer' />
                ) : (
                  <BiSolidDislike className='text-black bg-transparent text-xl cursor-pointer' />
                )
              }
            </div>
          </div>
          <div className='flex gap-2 items-center bg-gray-100 rounded-full py-[7px] px-3 cursor-pointer hover:bg-gray-200'>
            <PiShareFat className='text-xl text-gray-500' />
            <span className='text-sm'>Share</span>
          </div>
          <div className='flex items-center gap-1 bg-gray-100 rounded-full py-[7px] px-3 font-bold cursor-pointer hover:bg-gray-200 md:hidden'>
            <MdOutlineDownloading className='text-xl' />
            <span>Download</span>
          </div>
          <div className='bg-gray-100 py-[7px] px-2 rounded-full cursor-pointer hover:bg-gray-200 max-sm:hidden'>
            <PiDotsThreeBold className='lg:text-xl' />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-1 bg-gray-100 rounded-2xl p-3 mt-2'>
        <div className='flex gap-2 items-center'>
          <span className='font-bold'>{viewCount} views</span>
          <div className='p-[0.5px] h-4 bg-gray-500'></div>
          <span>{calender}</span>
        </div>
        <div>
          <p className={`text-sm overflow-hidden text-justify ${(showMore) ? "line-clamp-none" : "line-clamp-4"}`}>
            {videoData?.snippet?.description}
          </p>
          <span className="text-xs font-bold cursor-pointer" onClick={() => setShowMore(!showMore)}>
            {
              showMore ? "Show Less" : "Show More..."
            }
          </span>
        </div>
      </div>
    </div>
  )
}

// 'PropTypes.string.isRequired' specifies that the 'videoId' prop must be a string and is required
ChannelData.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default ChannelData
