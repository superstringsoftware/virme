import React,  { Component, PropTypes } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer'
import { Container, Row, Column } from './components/Layout';

// main App layout
export default class App extends Component {
  constructor(props) {
    super(props);

    //console.log(Component);
  }

  render() {
    return (
      <Container>
        <Nav />
        <Row>
          <Column num="4">
            <p>This is a left column</p>
          </Column>
          <Column num="8">
           <div className="mt-3">
             <h1>Sticky footer with fixed navbar</h1>
           </div>
           <p className="lead">Pin a fixed-height footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS. A fixed navbar has been added with <code>padding-top: 60px;</code> on the <code>body &gt; .container</code>.</p>
           <p>Back to <a href="../sticky-footer">the default sticky footer</a> minus the navbar.</p>
           </Column>
         </Row>
       <Footer />
     </Container>

    );
  }
}
