import React from "react";
import axios from "axios";
import classes from "./Search.module.scss";

const Search = () => {
  return (
    <form className={classes.Form}>
      <input type="text" placeholder="Bedrift AS" />
      <input type="submit" value="Søk" />
    </form>
  );
};

export default Search;
