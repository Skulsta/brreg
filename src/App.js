import React from "react";
import Layout from "./hoc/Layout/Layout";
import Search from "./components/Search/Search";
import Table from "./components/Table/Table";

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Search />
        <Table />
      </Layout>
    );
  }
}
export default App;
