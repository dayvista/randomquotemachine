import React, { Component } from "react";

// react-bootstrap components
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class FetchQuote extends Component {
  state = {
    quote: null
  };

  async componentDidMount() {
    const url = "https://api.kanye.rest/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ quote: data.quote });
  }

  // Obtain fresh quote from API
  getNewQuote = async () => {
    const url = "https://api.kanye.rest/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ quote: data.quote });
  };

  render() {
    return (
      <Card id="quote-box">
        <Card.Header>
          <Button
            className="myButton"
            id="new-quote"
            onClick={this.getNewQuote}
          >
            Let the Man Speak!
          </Button>
        </Card.Header>
        <Card.Body>
          <p id="author">"{this.state.quote}"</p>
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text="${this.state.quote}" - @kanyewest`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="myButton" id="tweetButton">
              <i className="fi-stluxl-twitter"></i> Tweet this gem!
            </Button>
          </a>
        </Card.Body>
      </Card>
    );
  }
}

export default FetchQuote;
