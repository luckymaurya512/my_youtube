const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const viewCount = statistics.viewCount;

  const formattedViewCount = (() => {
    if (viewCount < 1000) return viewCount;
    if (viewCount < 1000000) return `${(viewCount / 1000).toFixed(1)}K`;
    return `${(viewCount / 1000000).toFixed(1)}M`;
  })();

  return (
    <div
      className="p-2 m-2 w-72 shadow-lg rounded-lg hover:shadow-2xl transition duration-300 cursor-pointer bg-black"
    >
      <img
        className="rounded-lg w-full h-40 object-cover"
        alt="thumbnail"
        src={thumbnails.medium.url}
      />
      <ul>
        <li className="font-bold text-lg text-white">{title}</li>
        <li>
          <span className="text-gray-400">{channelTitle}</span>
          <i className="fas fa-user-circle text-gray-600" />
        </li>
        <li>
          <span className="text-gray-400">{formattedViewCount} views</span>
          <i className="fas fa-eye text-gray-600" />
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;