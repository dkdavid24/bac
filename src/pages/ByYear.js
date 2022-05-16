import { LinePlot } from "d3plus-react";

import "../App.css";

const ByYear = () => {
    return (
      <div className="Chart">
        <LinePlot
          config={{
            data: 'http://localhost:8000/api/urban-rural-by-year',
            groupBy: "id",
            baseline : 1,
            title : "Átlagok városok és falvak"
          }}
        />
      </div>
    );
};

export default ByYear;
