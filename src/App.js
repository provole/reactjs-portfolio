import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Work from './components/pages/Work';
import About from './components/pages/About';

function App() {
  return (
   
    
    <>
      <Router>
        <Navbar /> 
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/work' component={Work} />
          <Route path='/about' component={About} />
          {/* <Route path='/sign-up' component={SignUp} />  */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
