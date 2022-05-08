import { Link } from "react-router-dom";

import { LinePlot } from "d3plus-react";

import "../App.css";

const BySubject = () => {
    return (
      <div className="Chart">
        <Link to="/">Home</Link>
        <LinePlot
          config={{
            data: 'http://localhost:8000/api/subject-pass-rate',
            groupBy: "id",
            baseline : 0,
          }}
        />
      </div>
    );
};

export default BySubject;