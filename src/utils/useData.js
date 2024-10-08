import { useState,useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "./constants";
const useData = ()=>{
    const [ videos, setVideos] = useState([]);

    useEffect(() => {
      getVideos();
    }, []);
  
    const getVideos = async () => {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      setVideos(json.items);
      console.log(json);
    };
    return videos;
}
export default useData ;