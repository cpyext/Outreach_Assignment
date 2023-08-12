import * as React from "react";
import CSearchBar from "./CSearchBar";
import { useMyContext } from "../context/context";
type custHederProps = {
  description: string;
};
const CustomHeader = ({ description }: custHederProps) => {
  const { isHelp } = useMyContext();

  return (
    <>
      {!isHelp ? (
        <div className="centered-container flex flex-col mx-auto gap-12 py-44">
          <div className="text-8xl text-white font-bold  px-40 ">
            {description}
          </div>
          <div className="w-3/4 mx-auto">
            <CSearchBar />
          </div>
        </div>
      ) : (
        <div className="centered-container flex flex-col p-44  gap-12 py-44">
          <div className="px-36 gap-y-6">
            <div className="text-6xl text-white font-bold">
              Let’s find a solution! To make sure we connect you to the best
              resource, please describe what you need help with.
            </div>
            <div className="mt-12">
              <textarea
                className="w-full p-2 border rounded"
                rows="10"
                placeholder="Enter your text here..."
              />
            </div>
            <div className="px-3 py-1 border-white rounded-md w-fit bg-black text-white ml-auto">
              Go
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomHeader;
