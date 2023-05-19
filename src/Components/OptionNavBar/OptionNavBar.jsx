import React from "react";
import { NavLink } from "react-router-dom";

const OptionNavBar = (props) => {
  const { titleOption } = props;

  const isActiveClass = ({ isActive }) => {
    return isActive ? "active nav-link text-primary" : "nav-link";
  };

  return (
    <li className="nav-item">
      <NavLink to={`/category/${titleOption}`} className={isActiveClass}>
        {titleOption}
      </NavLink>
    </li>
  );
};

export default OptionNavBar;
