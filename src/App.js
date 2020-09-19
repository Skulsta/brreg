import React, { useState } from "react";
import { ThemeProvider, Link } from "@material-ui/core";
import { theme, Text } from "@tipio/tipio-ui/dist/index";
import CompanyTable from "./components/CompanyTable/CompanyTable";
import SearchForm from "./components/SearchForm/SearchForm";
import "./App.scss";

const App = () => {
    const [open, setOpen] = useState(false);
    const [companyData, setCompanyData] = useState({ enheter: [] });

    return (
        <ThemeProvider theme={theme}>
            <div className="Layout">
                <SearchForm
                    setOpen={result => setOpen(result)}
                    setCompanyData={result => setCompanyData(result)}
                />
                <CompanyTable open={open} companies={companyData} />
            </div>
        </ThemeProvider>
    );
};

export default App;
