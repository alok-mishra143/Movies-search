/* eslint-disable react/prop-types */
import React from "react";

const Search = ({ SearchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="search" />
        <input
          type="text"
          placeholder="Search from thousands of Movies"
          value={SearchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default React.memo(Search);
