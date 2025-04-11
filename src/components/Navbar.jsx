import { Link } from "react-router-dom";
import "./Navbar.css"; // هنضيف التنسيقات هنا

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">QuickMall</div>
      <ul className="navbar-links">
        <li><Link to="/">الرئيسية</Link></li>
        <li><Link to="/about">من نحن</Link></li>
        <li><Link to="/contact">تواصل معنا</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;