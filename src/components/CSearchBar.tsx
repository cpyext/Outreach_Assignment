import { SearchBar, onSearchFunc } from "@yext/search-ui-react";
import * as React from "react";

const CSearchBar = () => {
  const handleSearch: onSearchFunc = (searchEventData) => {
    const { query } = searchEventData;
    location.href = "https://answers_outreach.yextpages.net?query=" + query;
  };

  return <SearchBar onSearch={handleSearch}></SearchBar>;
};

export default CSearchBar;
