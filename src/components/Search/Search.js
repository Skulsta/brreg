import React from "react";
import axios from "axios";
import classes from "./Search.module.scss";

const Search = () => {
  return (
    <React.Fragment>
      <h2 className={classes.header + " b"}>
        Søk etter bedriftsnavn eller organisasjonsnummer
      </h2>
      <label className={classes.search_label} htmlFor="search-input">
        <input
          type="text"
          name="query"
          id="search-input"
          placeholder="Bedrift AS"
        />
        <i className="fa fa-search search-icon" aria-hidden="true" />
      </label>
    </React.Fragment>
  );
};

export default Search;
