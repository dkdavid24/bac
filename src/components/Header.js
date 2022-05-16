import { Link } from "react-router-dom";

import "../App.css";

const Header = () => {
  return (
    <nav>
        <Link to="/" className="menuLink">Home</Link>
    </nav>
  );
};

export default Header;
