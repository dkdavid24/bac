import { Link } from "react-router-dom";

import { LinePlot } from "d3plus-react";

import "../App.css";

const ByGeneration = () => {
    return (
      <div className="Chart">
        <Link to="/">Home</Link>
        <LinePlot
          config={{
            data: 'http://localhost:8000/api/current-previous-gen',
            groupBy: "id",
            baseline : 0,
          }}
        />
      </div>
    );
};

export default ByGeneration;