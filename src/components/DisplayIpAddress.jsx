

function DisplayIpAddress({ data }) {
    if (!data) return null;
  return (
    <>
      <div className="grid grid-cols-4 gap-[10px] w-full max-w-[700px] border-none z-1 p-10 mx-auto rounded-lg absolute bg-white translate - [-50%] top-65 left-150">
            <div className="flex flex-col border-r-2">
              <span className="font-bold text-gray-400 text-sm">IP ADDRESS</span>
              <span  className="font-bold text-lg">{data.ip}</span>
            </div>
            <div className="flex flex-col border-r-2">
              <span className="font-bold text-gray-400 text-sm">LOCATION</span>
              <span  className="font-bold text-lg">{data.location.city}, {data.location.region} {data.location.postalCode}</span>
            </div>
            <div className="flex flex-col border-r-2">
              <span className="font-bold text-gray-400 text-sm">TIMEZONE</span>
              <span  className="font-bold text-lg">{data.location.timezone}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-400 text-sm">ISP</span>
              <span  className="font-bold text-lg">{data.isp}</span>
            </div>
          </div>
    </>
  );
}

export default DisplayIpAddress;
