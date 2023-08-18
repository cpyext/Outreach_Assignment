import * as React from "react";
import { Image } from "@yext/pages/components";
import { useEffect, useState } from "react";
import { useMyContext } from "../context/context";
import { FaRegUserCircle } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";
import { SearchBar } from "@yext/search-ui-react";
type Link = {
  label: string;
  url: string;
};

const Header = ({ _site }: any) => {
  const { c_logofull } = _site;
  const [loggedIn, setLoggedIn] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(true);

  const { setIsHelp } = useMyContext();

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setShowSearchBar(false);
    } else {
      setShowSearchBar(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" fixed  bg-black w-full z-10">
      <div className="max-w-screen-2xl px-8">
        <nav className="py-6 flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <div>
              <Image image={c_logofull}></Image>
            </div>
            <div className="text-white">Customer Portal</div>
          </div>
          <div
            className={`!mb-0 flex-1 mx-4`}
            style={{
              opacity: showSearchBar ? 0 : 1,
              maxHeight: showSearchBar ? "0" : "100px",
              overflow: showSearchBar ? "hidden" : "visible",
              transition:
                "opacity 0.3s ease-in-out, max-height 0.3s ease-in-out",
            }}
          >
            <SearchBar
              customCssClasses={{
                searchBarContainer: "!mb-0 flex-1 mx-4",
              }}
            ></SearchBar>
          </div>
          <div className="gap-x-8 text-white flex items-center">
            <div className="flex gap-2 items-center">
              <div>Platform Status</div>
              <div
                className={`h-4 w-4 rounded-full ${
                  loggedIn ? "bg-[#E1A200]" : "bg-[#62DB7C]"
                }`}
              ></div>
            </div>
            {!loggedIn ? (
              <div className="border border-white px-8 py-2 flex gap-2 rounded-md hover:cursor-pointer">
                <div onClick={() => setLoggedIn(!loggedIn)}>Sign in</div>
                <div className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            ) : (
              <>
                <div className="px-8 py-2 flex gap-2 rounded-md bg-[#5950ff]">
                  <div
                    className="text-white hover:cursor-pointer"
                    onClick={() => setIsHelp(true)}
                  >
                    Get Help
                  </div>
                </div>
                <div>
                  <a href="https://support.outreach.io/hc/en-us/requests/new?&referrerPageUrl=">
                    Submit a request
                  </a>
                </div>
                <div className="text-white uppercase text-lg">Joel</div>
                <div>
                  <div className="relative text-[#5950ff]">
                    <FaRegUserCircle className="w-6 h-6" />
                    <BsEnvelope className="w-6 h-6 absolute bottom-0 right-0 transform translate-x-3/4 translate-y-1/2" />
                  </div>
                </div>
                <PiDotsThreeOutlineVerticalLight className="text-[#5950ff] w-6 h-6" />
              </>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
