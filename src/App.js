import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import CompanyTable from "./components/Table/Table";

import "./stylesheets/styles.scss";

const App = () => {
  return (
    <Container className="p-3">
      <Jumbotron className="bg-white">
        <h1 className="header">Some Header</h1>
        <CompanyTable>
          We now have Toasts
          <span role="img" aria-label="tada">
            🎉
          </span>
        </CompanyTable>
      </Jumbotron>
    </Container>
  );
};

export default App;
