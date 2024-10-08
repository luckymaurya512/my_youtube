import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import LikeShareSubscribe from "./LikeShareSubscribe";
import useData from "../utils/useData";


const WatchPage = () => {
    const [searchParam] = useSearchParams();
    const videos=useData();
    const [currentVideoInfo,setCurrentVideoInfo]=useState(null);
    useEffect(() => {
        // Find the video with the matching ID
        const video = videos.find(video => video.id === searchParam.get('v'));
        
        // If a video is found, update the state
        if (video) {
          setCurrentVideoInfo(video);
          console.log(video);
        }
      }, [searchParam,videos]);
    

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu())
    }, []);
   
    return (
        <div className="bg-gradient-to-r from-black to-gray-900 h-screen">
            <div className="pl-5 ml-14">
                <iframe 
                    width="850" 
                    height="450" 
                    src={`https://www.youtube.com/embed/${searchParam.get("v")}?autoplay=1`} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="rounded-xl"
                ></iframe>
            </div>
            
            <LikeShareSubscribe data={currentVideoInfo} />
        </div>
    )
};

export default WatchPage;
