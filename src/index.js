import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Box, Container } from '@material-ui/core';

import * as serviceWorker from './serviceWorker';
import Navigation from './Navigation';
import Home from './Home';
import OtherWork from './OtherWork';
import About from './About';
import Contact from './Contact';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <Container>
        <Box py={10}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/other" component={OtherWork} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Box>
      </Container>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
