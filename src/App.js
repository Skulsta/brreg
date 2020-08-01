import React from "react";
import "./App.scss";

import Search from "./components/Search/Search";
import Table from "./components/Table/Table";
import MaterialTable from "./components/MaterialTable/MaterialTable";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Search />
        <MaterialTable />
      </React.Fragment>
    );
  }
}
export default App;
