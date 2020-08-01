import React from "react";
import "./App.scss";

import Search from "./components/Search/Search";
import Table from "./components/Table/Table";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Search />
        <Table />
      </React.Fragment>
    );
  }
}
export default App;
