import VideoContainer from "./VideoContainer"
import ButtonList from "./ButtonList"

const MainContainer = () => {
    return(
        <div className="col-span-11 ml-3 mt-20 ">
            <ButtonList/>
            <VideoContainer/>
        </div>
    )
}
export default MainContainer;