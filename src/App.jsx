import React from "react";
import "./App.css";

import {
  Header,
  Features,
  Blog,
  Possibility,
  WhatGPT3,
  Footer,
} from "./containers/Containers";

import { Navbar, CTA, Brand } from "./components/Components";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
