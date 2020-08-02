import React, { useState } from "react";
import CompanyTable from "./components/CompanyTable/CompanyTable";
import SearchForm from "./components/SearchForm/SearchForm";

import "./stylesheets/styles.scss";

const App = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="Layout">
      <SearchForm setOpen={() => setOpen(!open)} />
      <CompanyTable open={open} />
    </div>
  );
};

export default App;
