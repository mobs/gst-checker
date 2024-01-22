import React, { useState } from "react";
import SearchBar from "./SearchBar";
import gstSvg from "../constants/gst-svg.svg";
import Card from "./Card";

const CheckGST = () => {
  const [data, setData] = useState(null);

  return (
    <div className="m-4 bg-gradient-to-b from-blue-200 via-white to-white lg:w-[98%] md:w-[97%] w-[94%] shadow-[0_2px_15px_-3px_rgba(23,125,232,0.2),0_10px_20px_-2px_rgba(23,125,232,0.2)] rounded-lg">
      <h6 className="p-2 sm:pl-8 text-gray-500 text-sm">
        {" "}
        Dashboard &gt; Check GST Data{" "}
      </h6>

      <div className="flex flex-col justify-center items-center">
        <div className="md:flex items-center gap-4">
          <div className="flex flex-col gap-4">
            <p className="font-bold md:text-2xl text-lg">
              Search and Confirm GST Registration
            </p>
            <p className="flex justify-center font-semibold md:text-lg text-sm">
              {" "}
              Quickly Verify GST Numbers with Confidence{" "}
            </p>
            <div className="flex justify-center">
              {" "}
              <SearchBar setData={setData} />{" "}
            </div>
          </div>
          <img src={gstSvg} />
        </div>

        {data && (
          <div className="z-30 w-[70%] mb-4">
            {typeof data === "string" ? (
              <div className="text-center font-bold text-3xl"> {data} </div>
            ) : (
              <Card data={data} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckGST;
