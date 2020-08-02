import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import CompanyTable from "./components/CompanyTable/CompanyTable";
import SearchForm from "./components/SearchForm/SearchForm";

import "./stylesheets/styles.scss";

const App = () => {
  const [open, setOpen] = useState(true);

  return (
    <Container>
      <SearchForm />
      <CompanyTable open={open} />
    </Container>
  );
};

export default App;
