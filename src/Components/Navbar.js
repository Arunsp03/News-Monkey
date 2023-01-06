import PropTypes from 'prop-types'
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Navbar =()=> {
  

  
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">News Monkey</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link></li>
              <li><Link className="nav-link" to="/Business">Business</Link></li>
              <li><Link className="nav-link" to="/Entertainment">Entertainment</Link></li>
              <li><Link className="nav-link" to="/General">General</Link></li>
              <li><Link className="nav-link" to="/Health">Health</Link></li>
              <li> <Link className="nav-link" to="/Science">Science</Link></li>
           
            </ul>
          
          </div>
        </div>
      </nav>
    )
  
}

export default Navbar