
import './App.css';

import React from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import Spinner from './Components/Spinner';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


 const App =()=> {

  
    return (
    <div>
       <Router>
      <Navbar/>
      
   
      <Switch>
          <Route exact path="/">
          <News   pagesize={10} key="business" country="us" category="business" />
          </Route>
          <Route exact path="/business">
          <News pagesize={10}  key="business" country="us" category="business" />
          </Route>
         
          <Route exact path="/entertainment">
          <News  pagesize={10} key="entertainment" country="us" category="entertainment" />
          </Route>
          <Route exact path="/general">
          <News  pagesize={10} key="general" country="us" category="general" />
          </Route>
          <Route exact path="/health">
          <News  pagesize={10} key="health" country="us" category="health" />
          </Route>
          <Route exact path="/science">
          <News   pagesize={10} key="science" country="us" category="science" />
          </Route>
         
         
        </Switch>
        </Router>
    </div>
    )
  }
export default App;
