import React, { Fragment, useCallback, useContext, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import CartContext from "../Context/CartContext";
import useFirestore from "../Utils/useFirestore";
import ItemCounterBtn from "../Components/ItemCounterBtn/ItemCounterBtn";
import { toast, ToastContainer } from "react-toastify";

const nameCollection = "products";

const ItemDetailContainer = () => {
  const { id: documentId } = useParams();
  const { addToCart } = useContext(CartContext);
  const [data] = useFirestore({ nameCollection, documentId });
  const { title, image, description, price, category, stock } = data;
  const [counter, setCounter] = useState(1);

  const sendToParent = useCallback(
    (value) => {
      setCounter(value);
      return counter;
    },
    [counter]
  );

  const addBtnAction = () => {
    addToCart([data, counter]);
    toast.success("Added to cart!");
  };

  return (
    <Fragment>
      <div className="row my-5">
        <div className="col-4">
          <h3>
            Category: <span className="text-info">{category}</span>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-6 offset-md-3">
          <div className="card mb-3 box-shadow py-2 px-5">
            <div className="row">
              <div className="card-header ">{title}</div>
              <div className="col-md-4">
                <img
                  src={image}
                  className="img-fluid rounded-start pt-3"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-text">{description}</p>
                  <div className="d-flex justify-content-between">
                    <p className="card-text">
                      <small className="text-muted">stock: {stock}</small>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">$ {price}</small>
                    </p>
                  </div>
                  <div className="btn-group">
                    <NavLink to={`/category/${category}`}>
                      <button className="btn btn-outline-danger btn-sm">
                        Go back!
                      </button>
                    </NavLink>
                    <button
                      className="btn btn-outline-success btn-sm"
                      onClick={addBtnAction}
                    >
                      Add to cart
                    </button>
                  </div>
                  <ItemCounterBtn stock={stock} sendToParent={sendToParent} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default ItemDetailContainer;
