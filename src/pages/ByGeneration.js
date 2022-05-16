import { LinePlot } from "d3plus-react";

import "../App.css";

const ByGeneration = () => {
    return (
      <div className="Chart">
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