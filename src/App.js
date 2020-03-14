import React from 'react';

// react-bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

import QuotesState from './context/quotes/QuotesState';

import './App.css';

function App() {
  return (
    <QuotesState>
      <Container>
        <Row className="all-center">
          <Accordion>
            <Card>
              <Card.Header>
                <h1 className='large'>Random Quote Machine</h1>
                <h2 className='lead'>Powered by <a href='http://forismatic.com/en' target='_blank' rel='noopener noreferrer'>forismatic.com</a></h2>
              </Card.Header>
            </Card>
            <Card>
              <Accordion.Collapse eventKey='0'>
                <Card.Body className='quoteBody'>
                  
                </Card.Body>
              </Accordion.Collapse>
              <Card.Header>
                <Accordion.Toggle className='myButton' as={Button} variant='link' eventKey='0'>
                  Generate New Quote
                </Accordion.Toggle>
              </Card.Header>
            </Card>
          </Accordion>
        </Row>
      </Container>
    </QuotesState>
  );
}

export default App;
