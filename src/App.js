import "./App.css";

import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "d3plus-react";

import Menu from "./pages/Menu";
import ByYear from "./pages/ByYear";
import ByCounty from "./pages/ByCounty";
import ByGeneration from "./pages/ByGeneration";
import BySubject from "./pages/BySubject";
import Header from "./components/Header";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Menu />} />
            <Route exact path="/by-year" element={<ByYear />} />
            <Route exact path="/by-county/:county" element={<ByCounty />} />
            <Route exact path="/by-generation" element={ <ByGeneration /> } />
            <Route exact path="/by-subject" element={ <BySubject /> } />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
