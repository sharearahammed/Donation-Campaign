import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? "text-red-500 font-bold underline text-xl" : isPending ? "pending" : ""
          }
          to="./"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={({ isActive, isPending }) =>
            isActive ? "text-red-500 font-bold underline text-xl" : isPending ? "pending" : ""
          } to="./donation">Donation</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive, isPending }) =>
            isActive ? "text-red-500 font-bold underline text-xl" : isPending ? "pending" : ""
          } to="./statistics">Statistics</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <img src="/Images/Logo.png" />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
    </div>
  );
};

export default NavBar;
