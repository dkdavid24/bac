import { LinePlot } from "d3plus-react";

import "../App.css";

const BySubject = () => {
  return (
    <div className="Chart">
      <LinePlot
        config={{
          data: "http://localhost:8000/api/subject-pass-rate",
          groupBy: "id",
          baseline: 0,
          title: "Átmenési arány tantárgyakra",
        }}
      />
    </div>
  );
};

export default BySubject;
