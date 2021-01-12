import React from 'react';

import './App.scss';
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header"
import Landing from "./components/Landing/Landing"
// import Contact from "./components/contact/Contact"

function App() {

  return (
    <main>
      <Header />
      <Landing />
      {/* <Contact /> */}
    </main>
  );
}

export default App;
