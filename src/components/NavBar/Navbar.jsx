import "./Navbar.css";
import logo from "../../assets/logo.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">connect with me</div>
    </nav>
  );
}

export default Navbar;
