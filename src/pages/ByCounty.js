import { useParams } from "react-router-dom";

import { LinePlot } from "d3plus-react";

import "../App.css";

const ByCounty = () => {
  const { county } = useParams();

  return (
    <div className="Chart">
      <LinePlot
        config={{
          data: `http://localhost:8000/api/county/${county}`,
          groupBy: "id",
          baseline: 1,
          title: "Átlag",
        }}
      />
      <LinePlot
        config={{
          data: `http://localhost:8000/api/county/${county}/pass-rate`,
          groupBy: "id",
          baseline: 0,
          title: "Átmenési arány",
        }}
      />
    </div>
  );
};

export default ByCounty;
