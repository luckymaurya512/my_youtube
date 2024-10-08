// import YOUTUBE_VIDEO_API from "..utils/constants";
import { useEffect , useState} from "react";

import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import useData from "../utils/useData";

const VideoContainer= () => {
   const videos=useData();
    return(
        <div className="flex flex-wrap bg-black">
        {videos.map(video =>( 
          <Link to={"watch?v=" + video.id}> 
          <VideoCard key={video.id} info={video}/>
          </Link>))}
        </div>
    )
};
export default VideoContainer;