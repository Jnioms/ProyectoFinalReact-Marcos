import React from "react";
import { NavLink } from "react-router-dom";

const ItemListComponent = (props) => {
  const { data } = props;
  const { id: idProduct, title, image, description, price } = data;

  const showShortValue = (value = "", lengthMax = 45) => {
    return value.length > lengthMax
      ? value.substring(0, lengthMax).concat(" ...")
      : value;
  };
  return (
    <div className="card mb-4 box-shadow">
      <div className="card-header ">{showShortValue(title, 25)}</div>
      <img className="card-img-top" width={400} height={400} src={image} alt="" />
      <div className="card-body">
        <p className="card-text">{showShortValue(description)}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <NavLink to={`/item/${idProduct-1}`}>
              <button className="btn btn-sm btn-outline-secondary">
                More Info...
              </button>
            </NavLink>
          </div>
          <small className="text-muted">
            $ {price}
          </small>
        </div>
      </div>
    </div>
  );
};

export default ItemListComponent;
