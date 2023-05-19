import React, { Fragment, useContext } from "react";
import CartComponent from "../Components/CartComponent/CartComponent";
import CartContext from "../Context/CartContext";
import ItemCartComponent from "../Components/ItemCartComponent/ItemCartComponent.jsx";

const CheckoutContainer = () => {
  var { cart } = useContext(CartContext);

  return (
    <Fragment>
      <div className="row mt-5">
        <div className="col-md-4 order-md-2">
          <div className="px-5">
            <CartComponent />
          </div>
        </div>
        <div className="col-md-8 order-md-1">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Remove</th>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Units</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <ItemCartComponent data={item} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default CheckoutContainer;
