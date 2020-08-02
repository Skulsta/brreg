import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

import "./stylesheets/styles.scss";

class App extends React.Component {
  render() {
    return (
      <Container className="p-3">
        <Jumbotron>
          <h1 className="header">Some Header</h1>
        </Jumbotron>
      </Container>
    );
  }
}
export default App;
