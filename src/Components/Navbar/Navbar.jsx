import React, {useMemo} from "react";
import NavBarItem from "../NavBarItem/NavBarItem";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import useFirestore from "../../Utils/useFirestore"

const nameCollection = "categories";

const Navbar = () => {
  const [data] = useFirestore({ nameCollection });

  const dataLoad = useMemo(() => {
    const categoriesObject = data.length !== 0 ? data[0] : [];
    return "category" in categoriesObject ? categoriesObject.category : [];
  }, [data]);

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <div>Comercio Libre</div>
        </NavLink>
        <div className="collapse navbar-collapse">
          <NavBarItem navItem={dataLoad} />
        </div>
      </div>
      <div className="collapse navbar-collapse mx-2">
          <CartWidget />
        </div>
    </nav>
  );
};

export default Navbar;
