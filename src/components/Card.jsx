import React, { useRef} from "react";
import { keyMapper } from "../constants/constants";
import copySvg from "../constants/copy-svg.svg"


const Card = ({ data }) => {
    
    const divRef = useRef(null);

    const handleCopy = () => {
      if (!divRef.current) return;
  
      const range = document.createRange();
      range.selectNode(divRef.current);
  
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
  
      try {
        document.execCommand('copy');
        alert('Content copied to clipboard!');
      } catch (err) {
        console.error('Unable to copy text to clipboard', err);
      }
  
      selection.removeAllRanges();
    };

  return (
    <div className="w-full text-gray-500">
      <div className="flex flex-col gap-4 mb-4 text-gray-800">
        <h2 className="text-center font-bold md:text-5xl text-3xl"> {data.name} </h2>
        <strong className="text-center text-lg"> {data.gstNumber} </strong>
        <div className="md:flex gap-4 justify-between w-full">
          <p> <strong> Registered On: </strong> {data.registrationDate}</p>
          <p> <strong> GST Status: </strong> {data.status} </p>

          <p> <strong> Last Updated On: </strong> {data.updationDate}</p>
        </div>
      </div>


      <div className="flex flex-col gap-4 w-full bg-gray-100 p-4 text-gray-500 shadow-[0_2px_15px_-3px_rgba(23,125,232,0.2),0_10px_20px_-2px_rgba(23,125,232,0.2)] rounded-lg">
        <h2 className="font-bold"> BUSINESS DETAILS </h2>
        <hr />
        <ul ref={divRef} className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {Object.entries(data).map(([key, value]) => {
            if (key === "gstNumber" || key === "updationDate") return "";
            const newKey = keyMapper(key);

            return (
              <li className="flex" key={value}>
                <div className="w-1 bg-blue-300 mx-2 rounded-full "></div>
                <div className="flex flex-col">
                  <span> {newKey} </span>
                  <strong className="text-gray-700"> {value} </strong>
                </div>
              </li>
            );
          })}
        </ul>
        <hr />
        <button onClick={handleCopy} className="p-1 flex w-24 justify-center lg:mx-[85%] md:mx-[80%] mx-[60%] text-blue-500 font-semibold outline-1 border-2 border-blue-500 rounded hover:shadow-[0_2px_15px_-3px_rgba(23,125,232,0.2),0_10px_20px_-2px_rgba(23,125,232,0.2)]"> 
            <img src={copySvg} className="mt-1 h-4 w-4" />
            Copy 
        </button>
      </div>
      

    </div>
  );
};

export default Card;
