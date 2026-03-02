
 import { useState } from "react";
import arrowIcon from "../assets/images/icon-arrow.svg"
 import bgImage from "../assets/images/pattern-bg-desktop.png";
import useFetch from "../hooks/useFetch";
function SearchIpAddress() {

    const [searchData,setSearchData] = useState("");


    function handleClick() {
  const {data, loading, error}= useFetch ("")
    }

    return(
        <div className="h-80 bg-cover "
  style={{ backgroundImage: `url(${bgImage})` }}>
          <h1 className="text-3xl mb-4 text-center text-white ">IP Address Tracker</h1>
        <div className="flex justify-center mt-10">
        <input
          type="search"
          placeholder="Search for any IP address"
          className="p-3 w-80 rounded-l-lg outline-none border bg-white"
          value={searchData}
          onChange={(e)=>setSearchData(e.target.value)}
        />

        <button
          type="submit"
          className="bg-black hover:bg-gray-800 px-5 flex items-center justify-center rounded-r-lg"
          onClick={handleClick}
        >
          <img src={arrowIcon} alt="arrow icon" className="w-5 h-5" />
        </button>
      </div>
        </div>
    )
}

export default SearchIpAddress;