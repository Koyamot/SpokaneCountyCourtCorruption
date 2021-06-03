import React from 'react';

import './App.scss';
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header"
import Landing from "./components/Landing/Landing"
import Complaint from "./components/DOJComplaint/DOJComplaint"
// import Contact from "./components/contact/Contact"

function App() {

  return (
    <main>
      <Header />
      <Switch>
        <Route path='/' exact>
          <Landing />
        </Route>
        <Route path='/complaint' exact>
          <Complaint />
        </Route>
        {/* <Route path='/' component={Contact} /> */}
      </Switch>
    </main>
  );
}

export default App;
