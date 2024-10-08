import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMagnifyingGlass, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import logo from "./logo.png";
import hamburger from "./hamburger.png";

// import { YOUTUBE_SEARCH_API } from "../utils/constants";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => getSearchSuggestions(), 200);
        return () => {
            clearTimeout(timer)
        };
    }, [searchQuery]);

    const getSearchSuggestions = async () => {
        console.log(searchQuery);
        const data = await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" + searchQuery);
        const json = await data.json();
        setSuggestions(json[1]);
    }

    const dispatch = useDispatch();
    const toggleMenuhandler = () => {
        dispatch(toggleMenu());
    };
    return (
        <div className="grid grid-flow-col  p-3 shadow-lg bg-black ">
            <div className="flex col-span-1 items-center">
                <img className="h-10  cursor-pointer align-middle"
                    onClick={() => toggleMenuhandler()}
                    src={hamburger}
                    alt="hamburger" />
                <img className="h-12 mx-3 align-middle"
                    src={logo} alt="logo" />
            </div>
            <div className="col-span-10 text-center mt-2 mb-1">
                <div className="relative align-middle"> {/* Add position: relative to the parent element */}
                    <input placeholder="Search" className="w-1/2 rounded-l-full border border-gray-700 p-2 pl-4 text-gray-100 align-middle bg-black " type="text" value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)} />
                    <button className="py-2 px-4 border border-gray-600 rounded-r-full text-gray-300 bg-gray-900 align-middle"><FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2 mt-1" />
                    </button>
                    <FontAwesomeIcon className="bg-gray-950 border border-gray-100 text-gray-300 ml-6 rounded-full px-3 p-2 align-middle cursor-pointer" icon={faMicrophone} fontSize="23px" />
                    <FontAwesomeIcon className="bg-gray-900 border border-gray-100 ml-80 text-gray-300 rounded-full p-2 align-middle" icon={faBell} fontSize="23px" />
                    {showSuggestions && <div className="absolute top-12 left-12 bg-white py-2 px-5 w-[37rem] shadow-lg rounded-lg border border-gray-600"> 
                        <ul>
                            {suggestions.map((s) => (
                                <li className="text-left hover:bg-gray-100"><FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2 " />{s}</li>
                            ))}
                        </ul>
                    </div>}
                </div>
            </div>
            <div className="col-span-1 mt-2">
                <img className="h-9 align-middle"
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="userIcon" />
            </div>
        </div>
    )
};
export default Head;