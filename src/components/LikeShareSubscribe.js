import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faThumbsUp, faThumbsDown, faCircleUser       } from '@fortawesome/free-regular-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons/faShare';
import { RiDownloadLine } from "react-icons/ri";
import { PiDotsThreeCircle } from "react-icons/pi";

const formatLikeCount = (likeCount) => {
    if (likeCount < 1000) {
        return likeCount;
    } else if (likeCount < 1000000) {
        return `${Math.floor(likeCount / 1000)}k`;
    } else {
        return `${(likeCount / 1000000).toFixed(1)}m`;
    }
};

const LikeShareSubscribe = ({ data }) => {
    const title = data?.snippet.title;
    const channelTitle = data?.snippet.channelTitle;
    const description = data?.snippet.description;
    const likeCount = data?.statistics?.likeCount;
    const viewCount = data?.statistics?.viewCount;

    const [showFullDescription, setShowFullDescription] = useState(false);

    console.log(title);

    return (
        <div className='bg-gray-900 h-screen w-screen p-5'>
            <div>
                <h2 className="text-white font-bold text-xl mt-1">{title}</h2>
            </div>
            <div className="flex mt-6 space-x-4 mr-6">
                <div className="flex items-center space-x-2">
                    <button className="p-0 bg-gray-600 text-white rounded-full hover:bg-gray-500 flex items-center justify-center w-10 h-10">
                        <FontAwesomeIcon icon={faCircleUser      } className="h-8" />
                    </button>
                    <span className="font-bold text-white">{channelTitle}</span>
                </div>

                <button className="bg-gray-600 text-white py-1 px-3 rounded-full hover:bg-gray-500">
                    Subscribe
                </button>

                <div className="flex">
                    <button className="flex items-center justify-center bg-gray-600 text-white py-1 px-3 rounded-l-full hover:bg-gray-500">
                        <FontAwesomeIcon icon={faThumbsUp} className="mr-1" />
                        {formatLikeCount(likeCount)}
                    </button>
                    <button className="flex items-center justify-center bg-gray-600 text-white py-1 px-3 rounded-r-full hover:bg-gray-500">
                        <FontAwesomeIcon icon={faThumbsDown} className="mr-1" />
                    </button>
                </div>

                <button className="bg-gray-600 text-white py-1 px-3 rounded-lg hover:bg-gray-500 flex items-center justify-center">
                    <FontAwesomeIcon icon={faShare} className="mr-1" />
                    Share
                </button>

                <button className="bg-gray-600 text-white py-1 px-3 rounded-lg hover:bg-gray-500 flex items-center justify-center">
                    <RiDownloadLine className="mr-1" />
                    Downloads
                </button>

                <button className="bg-gray-600 text-white p-1 rounded-full hover:bg-gray-500 flex items-center justify-center w-10 h-10">
                    <PiDotsThreeCircle  />
                </button>
            </div>
            <div className="text-gray-400 text-sm mt-2">
                <div>{viewCount} views</div>
                <div>
                    {showFullDescription ? (
                        <div>
                            <div style={{ wordBreak: 'break-word' }}>{description}</div>
                            <button className="text-blue-600 hover:text-blue-900" onClick={() => setShowFullDescription(false)}>Show less...</button>
                        </div>
                    ) : (
                        <div>
                            <div style={{ wordBreak: 'break-word', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                                {description}
                            </div>
                            <button className="text-blue-600 hover:text-blue-900" onClick={() => setShowFullDescription(true)}>Show more...</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LikeShareSubscribe;