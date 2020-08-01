import React from "react";
import classes from "./Search.module.scss";

const Search = () => {
  return (
    <form className={classes.Form}>
      <input type="text" label="Søk etter bedrift" placeholder="Bedrift AS" />
      <input type="submit" label="Utfør søk" value="Søk" />
    </form>
  );
};

export default Search;
