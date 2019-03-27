import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './component/Home/Home';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Impact from './component/Impact/Impact'
import Risk from './component/Risk/Risk'
import Resolve from './component/Resolve/Resolve'
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="container-fluid">
                <header>
                  <div className="slogo">
                    <img src="img/logo.jpg" width="50px"/>
                    <h1>Gasy Ecocitizen</h1>
                    <p>Take care of our environment</p>  
                  </div>
                  <nav>
                    <ul className="menu">
                      <li> <Link to="/Home" class="active">Home</Link></li>
                      <li><Link to="/About" class="active">About</Link></li>
                      <li> <Link to="/Impact" class="active">Impact</Link></li>
                      <li> <Link to="/Risk" class="active">Risk</Link></li>
                      <li> <Link to="/Resolve" class="active">Finding resolve</Link></li>
                      <li><Link to="/Contact" class="active">Contact</Link></li>
                    </ul>
                  </nav>
                </header>

                <div className="content">
                  <Route path="/" exact component={Home} />
                  <Route path="/Home" component={Home} />
                  <Route path="/Impact" component={Impact} />
                  <Route path="/Risk" component={Risk} />
                  <Route path="/Resolve" component={Resolve} />
                  <Route path="/About" component={About} />
                  <Route path="/Contact" component={Contact} />
                </div>

              <footer>footer</footer> 
            </div>  
        </Router>
    );
  }
}

export default App;