import React from "react";

import { Link } from "react-router-dom";

import { LinePlot } from "d3plus-react";

import "../App.css";

const ByYear = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <LinePlot className="Chart"
  config={{
    data: [
      {
        id: 'urban',
        x: 2014,
        y: 7.5
      },
      {
        id: 'urban',
        x: 2015,
        y: 7.4
      },
      {
        id: 'urban',
        x: 2016,
        y: 7.6
      },
      {
        id: 'rural',
        x: 2014,
        y: 7.0
      },
      {
        id: 'rural',
        x: 2015,
        y: 7.1
      },
      {
        id: 'rural',
        x: 2016,
        y: 6.9
      }
    ],
    groupBy: 'id'
  }}
 />
    </div>
  );
};

export default ByYear;
