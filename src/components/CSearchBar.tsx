import { useSearchActions } from "@yext/search-headless-react";
import { SearchBar, onSearchFunc } from "@yext/search-ui-react";
import * as React from "react";

const CSearchBar = () => {
  const searchActions = useSearchActions();

  const handleSearch: onSearchFunc = (searchEventData) => {
    const { query } = searchEventData;

    console.log(query);
    location.href = "https://answers_outreach.yextpages.net?query=" + query;
  };

  return <SearchBar onSearch={handleSearch}></SearchBar>;
};

export default CSearchBar;
