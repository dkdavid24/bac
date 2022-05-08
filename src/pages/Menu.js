import React, { useState } from "react";

import { Link } from 'react-router-dom';

const Menu = () => {
  const [ county, setCounty ] = useState('');

  return (
    <div className="Menu">
      <Link to="/by-year">Átlagok városok és falvak</Link>
      <Link to="/by-generation">Arányok generációk között</Link>
      <Link to="/by-subject">Tantárgyak</Link>
      <form method="GET" action={ `/by-county/${ county }` }>
      <input type="text" placeholder="Megye" value={county} onChange={
        e => setCounty(e.target.value.toUpperCase())
      }></input>
      <input type="submit" value="Keres"></input>
      </form>
    </div>
  );
};

export default Menu;
