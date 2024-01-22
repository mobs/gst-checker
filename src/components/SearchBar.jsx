import React, { useState } from "react";
import {createFakeGstData} from "../constants/constants"

const SearchBar = ({ setData }) => {
    const [searchValue, setSearchValue] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();

        /* 
        when using hard coded data
        const data = gstData.map((gst) => {
            if (gst.gstNumber === searchValue) {
                return gst;
            }
        })
        */

        // using faker-js to generate random data
        let data;
        if(searchValue.length === 15) {
            data = createFakeGstData(searchValue)
        } else data = "Enter a valid 15 digit GST Number"
        setData(data);
    }
  return (
    <form className="mb-3" onSubmit={handleSubmit}>
      <div className="relative mb-4 flex flex-wrap items-stretch border border-solid rounded-full text-black shadow-[0_2px_15px_-3px_rgba(23,125,232,0.2),0_10px_20px_-2px_rgba(23,125,232,0.2)]">
        <input
          type="search"
          className="relative m-0 block min-w-0 flex-auto bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal text-black leading-[1.6] outline-none transition duration-200 ease-in-out "
          placeholder="Search"
          aria-label="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          aria-describedby="button-addon2"
        />

        <span
          className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal"
          id="basic-addon2"
        >
            <button type="submit"> 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
          </button>
        </span>
      </div>
    </form>
  );
};

export default SearchBar;
