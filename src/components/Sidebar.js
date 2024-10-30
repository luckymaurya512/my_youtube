import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon, CgPlayList  } from '@fortawesome/react-fontawesome';
import { faHouse, faVideo, faClock, faThumbsUp, faClockRotateLeft, faDownload, faArrowTrendUp, faBagShopping, faPodcast, faChildren, faGear, faBug, faQuestion, faComments, faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faMusic, faPlay, faFilm, faClapperboard, faLifeRing, faTrophy } from '@fortawesome/free-solid-svg-icons'
import { faXbox, faHackerNews, faDiscourse, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { SiYoutubeshorts } from "react-icons/si";
// import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'


const Sidebar = () => {
    const ismenuOpen = useSelector((store) => store.app.ismenuOpen);
    if (!ismenuOpen) return null;
    return (
        <div className=" w-56 bg-black shadow-md rounded md:w-56 lg:w-64 p-5 text-white mt-16">
            <ul>
                <li className="text-white cursor-pointer hover:bg-gray-600 p-2 hover:rounded-lg align-middle">
                    <Link to="/" ><FontAwesomeIcon icon={faHouse} className="mr-2 m-1  " />   Home</Link>
                </li >
                <li className="text-white cursor-pointer hover:bg-gray-600 p-2 hover:rounded-lg align-middle">
                    <span className="flex"><SiYoutubeshorts className="mr-2 m-1" /> Shorts</span>
                </li>
                <li className="text-white cursor-pointer hover:bg-gray-600 p-2 hover:rounded-lg align-middle"><FontAwesomeIcon icon={faVideo} className="mr-2 m-1" />   Subscriptions</li>
            </ul>
            <hr />

            <h1 className="font-bold mt-2 cursor-pointer hover:bg-gray-600 p-2 hover:rounded-lg align-middle">You</h1>

            <ul>

                <li className=" cursor-pointer hover:bg-gray-600 p-2 hover:rounded-lg align-middle"><FontAwesomeIcon icon={faClockRotateLeft} className="mr-2 m-1" />  History</li>
                <li className=" cursor-pointer hover:bg-gray-600 p-2 hover:rounded-lg align-middle"><FontAwesomeIcon icon={faPlay} className="mr-2 m-1" />Playlist</li>
                <li className=" cursor-pointer hover:bg-gray-600 p-2 hover:rounded-lg align-middle"><FontAwesomeIcon icon={faClock} className="mr-2 m-1" />Watch later</li>
                <li className=" cursor-pointer hover:bg-gray-600 p-2 hover:rounded-lg align-middle"><FontAwesomeIcon icon={faThumbsUp} className="mr-2 m-1" />Liked Videos</li>
                <li className=" cursor-pointer hover:bg-gray-600 p-2 hover:rounded-lg align-middle"><FontAwesomeIcon icon={faDownload} className="mr-2 m-1" />Downloads</li>
            </ul>

            <hr />

            <h1 className="mt-2 font-bold text-white cursor-pointer hover:bg-gray-600 p-2 hover:rounded-lg align-middle">Subscriptions</h1>
            <ul className="text-white">
                <li className="cursor-pointer hover:bg-gray-600 p-2 hover:rounded-lg align-middle"><FontAwesomeIcon icon={faCircleUser} className="mr-2 m-1" />Explorin</li>
                <li className="cursor-pointer hover:bg-gray-600 p-2 hover:rounded-lg align-middle"><FontAwesomeIcon icon={faCircleUser} className="mr-2 m-1" />Akshay Saini</li>
                <li className="cursor-pointer hover:bg-gray-600 p-2 hover:rounded-lg align-middle"><FontAwesomeIcon icon={faCircleUser} className="mr-2 m-1" />Chai aur Code</li>
                <li className="cursor-pointer hover:bg-gray-600 p-2 hover:rounded-lg align-middle"><FontAwesomeIcon icon={faCircleUser} className="mr-2 m-1" />take U forward</li>
                <li className="cursor-pointer hover:bg-gray-600 p-2 hover:rounded-lg align-middle"><FontAwesomeIcon icon={faCircleUser} className="mr-2 m-1" />Open Letter</li>
                <li className="cursor-pointer hover:bg-gray-600 p-2 hover:rounded-lg align-middle"><FontAwesomeIcon icon={faCircleUser} className="mr-2 m-1" />Dhruv Rathee</li>
            </ul>

            <hr />

            <h1 className="font-bold mt-2 cursor-pointer hover:bg-gray-600 p-2 hover:rounded-lg align-middle">Explore</h1>
            <ul className="text-white">
                <li className="cursor-pointer hover:bg-gray-600 p-2 hover:rounded-lg align-middle"><FontAwesomeIcon icon={faArrowTrendUp} className="mr-2 m-1" />Trending</li>
                <li className="cursor-pointer hover:bg-gray-600 p-2 hover:rounded-lg align-middle"><FontAwesomeIcon icon={faBagShopping} className="mr-2 m-1" />Shopping</li>
                <li className="cursor-pointer hover:bg-gray-600 p-2 hover:rounded-lg align-middle"><FontAwesomeIcon icon={faMusic} className="mr-2 m-1" />Music</li>
                <li className="cursor-pointer hover:bg-gray-600 p-2 hover:rounded-lg align-middle"><FontAwesomeIcon icon={faClapperboard} className="mr-2 m-1" />Movies</li>
                <li className="cursor-pointer hover:bg-gray-600 p-2 hover:rounded-lg align-middle"><FontAwesomeIcon icon={faLifeRing} className="mr-2 m-1" />Live</li>
                <li className="cursor-pointer hover:bg-gray-600 p-2 hover:rounded-lg align-middle"><FontAwesomeIcon icon={faXbox} className="mr-2 m-1" />Gaming</li>
                <li className="cursor-pointer hover:bg-gray-600 p-2 hover:rounded-lg align-middle"><FontAwesomeIcon icon={faHackerNews} className="mr-2 m-1" />News</li>
                <li className="cursor-pointer hover:bg-gray-600 p-2 hover:rounded-lg align-middle"><FontAwesomeIcon icon={faTrophy} className="mr-2 m-1" />Sports</li>
                <li className="cursor-pointer hover:bg-gray-600 p-2 hover:rounded-lg align-middle"><FontAwesomeIcon icon={faDiscourse} className="mr-2 m-1" />Courses</li>
                <li className="cursor-pointer hover:bg-gray-600 p-2 hover:rounded-lg align-middle"><FontAwesomeIcon icon={faBagShopping} className="mr-2 m-1" />Fashion & Beauty</li>
                <li className="cursor-pointer hover:bg-gray-600 p-2 hover:rounded-lg align-middle"><FontAwesomeIcon icon={faPodcast} className="mr-2 m-1" />Podcasts</li>
            </ul>

            <hr />

            <h1 className="font-bold mt-2text-white cursor-pointer hover:bg-gray-600 p-2 hover:rounded-lg align-middle">More From YouTube</h1>

            <ul>
                <li className="cursor-pointer hover:bg-gray-600 p-2 hover:rounded-lg align-middle"><FontAwesomeIcon icon={faYoutube} className="mr-2 m-1" />YouTube Premium</li>
                <li className="cursor-pointer hover:bg-gray-600 p-2 hover:rounded-lg align-middle"><FontAwesomeIcon icon={faMusic} className="mr-2 m-1" />YouTube Music</li>
                <li className="cursor-pointer hover:bg-gray-600 p-2 hover:rounded-lg align-middle"><FontAwesomeIcon icon={faChildren} className="mr-2 m-1" />YouTube Kids</li>
            </ul>

            <hr />

            <ul>
                <li className="cursor-pointer hover:bg-gray-600 p-2 hover:rounded-lg align-middle"><FontAwesomeIcon icon={faGear} className="mr-2 m-1" />Settings</li>
                <li className="cursor-pointer hover:bg-gray-600 p-2 hover:rounded-lg align-middle"><FontAwesomeIcon icon={faBug} className="mr-2 m-1" />Report History</li>
                <li className="cursor-pointer hover:bg-gray-600 p-2 hover:rounded-lg align-middle"><FontAwesomeIcon icon={faQuestion} className="mr-2 m-1" />Help</li>
                <li className="cursor-pointer hover:bg-gray-600 p-2 hover:rounded-lg align-middle"><FontAwesomeIcon icon={faComments} className="mr-2 m-1" />Send Feedback</li>
            </ul>
        </div>
    )
};

export default Sidebar;