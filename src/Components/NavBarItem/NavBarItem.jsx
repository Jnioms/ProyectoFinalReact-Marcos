import React from "react";
import OptionNavBar from "../OptionNavBar/OptionNavBar";

const NavBarItem = (props) => {
  const { navItem } = props;
  return (
    <ul className="navbar-nav mr-auto">
      {navItem.map((item, index) => {
        return <OptionNavBar key={index} titleOption={item} />;
      })}
    </ul>
  );
};

export default NavBarItem;
