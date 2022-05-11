import { Link, useParams } from "react-router-dom";

import { LinePlot } from "d3plus-react";

import "../App.css";

const ByCounty = () => {
  const { county } = useParams();

  return (
    <div className="Chart">
      <Link to="/">Home</Link>
      <LinePlot
        config={{
          data: `http://localhost:8000/api/county/${county}`,
          groupBy: "id",
          baseline: 0,
        }}
      />
      <LinePlot
        config={{
          data: `http://localhost:8000/api/county/${county}/pass-rate`,
          groupBy: "id",
          baseline: 0,
          y: "y",
          yConfing: {
            tickFormat: function(d) {
              return `${parseFloat(d) * 100}%`;
            }
          },
        }}
      />
    </div>
  );
};

export default ByCounty;
