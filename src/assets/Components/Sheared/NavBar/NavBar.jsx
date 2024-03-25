import { NavLink } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    const links = (
        <>
        <li><NavLink to="./">Home</NavLink></li>
        <li><NavLink to="./donation">Donation</NavLink></li>
        <li><NavLink to="./statistics">Statistics</NavLink></li>
        </>
    )
    return (
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <img src="/Images/Logo.png" />
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      {links}
      
    </ul>
  </div>
</div>
    );
};

export default NavBar;