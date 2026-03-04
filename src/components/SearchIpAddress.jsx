
 import { useState } from "react";
import arrowIcon from "../assets/images/icon-arrow.svg"
 import bgImage from "../assets/images/pattern-bg-desktop.png";
import useFetch from "../hooks/useFetch";
import DisplayIpAddress from "./DisplayIpAddress";
import MyMap from "./MyMap";

function SearchIpAddress() {

    const [searchData,setSearchData] = useState("");
    const [ipToSearch, setIpToSearch] = useState("");
const key = import.meta.env.VITE_API_KEY;
console.log("API KEY:", key);
const { data, loading, error } = useFetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${key}${
      ipToSearch ? `&ipAddress=${ipToSearch}` : ""
    }`
  );
console.log(data);


function handleSubmit(e) {
  e.preventDefault();
setIpToSearch(searchData);
}
    return(
      <>
        <form onSubmit={handleSubmit}
        className="h-80 bg-cover z-0"
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
          
        >
          <img src={arrowIcon} alt="arrow icon" className="w-5 h-5" />
        </button>
      </div>
        </form>
        {/* Display IP Data */}
      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && (
        <p className="text-center mt-4 text-red-500">Error fetching IP data.</p>
      )}
      {data && <DisplayIpAddress data={data} />}
      {data && <MyMap data={data} />}
        </>
    )
}

export default SearchIpAddress;