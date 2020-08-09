import React, { useState } from "react";
import CompanyTable from "./components/CompanyTable/CompanyTable";
import SearchForm from "./components/SearchForm/SearchForm";
import "./App.scss";

const App = () => {
  const [open, setOpen] = useState(false);
  const [companyData, setCompanyData] = useState({ enheter: [] });

  return (
    <div className="Layout">
      <SearchForm
        setOpen={(result) => setOpen(result)}
        setCompanyData={(result) => setCompanyData(result)}
      />
      <CompanyTable open={open} companies={companyData} />
    </div>
  );
};

export default App;
