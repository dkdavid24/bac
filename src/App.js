import logo from "./logo.svg";
import "./App.css";

import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "d3plus-react";

import Menu from "./pages/Menu";
import ByYear from "./pages/ByYear";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Menu />} />
            <Route exect path="/by-year" element={<ByYear />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

