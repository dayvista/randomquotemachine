import React, { Component } from "react";
import "./App.css";

// react-bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

import FetchQuote from "./components/FetchQuote";

class App extends Component {
  render() {
    return (
      <Container>
        <Row className="all-center">
          <Card>
            <Card.Header>
              <span role="img" aria-label="Wave Emoji">
                &#128591;
              </span>
              <h1 className="large">Kanye West Quote Generator</h1>
              <h2 className="lead">
                Powered by{" "}
                <a
                  href="https://kanye.rest"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  kanye.rest
                </a>
                <br />
                Designed by William Davis @{" "}
                <a
                  href="https://dayvista.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  dayvista.dev
                </a>
              </h2>
            </Card.Header>
          </Card>
          <FetchQuote id="text" />
        </Row>
      </Container>
    );
  }
}

export default App;
