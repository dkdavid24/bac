import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { LinePlot } from "d3plus-react";

import "../App.css";

const ByYear = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await fetch("http://localhost/test.json");
    const json = await response.json();
    setData(json);
  };

  useEffect(()=>{fetchData();}, [data]);

  if (data) {
    return (
      <div className="Chart">
        <Link to="/">Home</Link>
        <LinePlot
          config={{
            data: { data },
            groupBy: "id",
          }}
        />
      </div>
    );
  }
  return (
    <div className="Chart">
      <Link to="/">Home</Link>
      <h2>Loading</h2>
    </div>
  );
};

export default ByYear;
