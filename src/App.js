import React from "react";
import Layout from "./hoc/Layout/Layout";
import Search from "./components/Search/Search";

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Search />
      </Layout>
    );
  }
}
export default App;
