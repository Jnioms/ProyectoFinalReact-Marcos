import React, { Fragment, useContext } from "react";
import CartContext from "../../Context/CartContext";
import { toast, ToastContainer } from "react-toastify";

const ItemCartComponent = (props) => {
  const { removeFromCart } = useContext(CartContext);
  const { data } = props;
  const amount = data[1];
  const { title, price } = data[0];

  const removeThisItem = () => {
    toast.error(`Item ${showShortValue(title, 25)} removed!`);
    removeFromCart(data);
  };

  const showShortValue = (value = "", lengthMax = 45) => {
    return value.length > lengthMax
      ? value.substring(0, lengthMax).concat(" ...")
      : value;
  };
  return (
    <Fragment>
      <td><button type="button" className="btn btn-outline-danger" onClick={removeThisItem}>X</button></td>
      <td>{showShortValue(title, 25)}</td>
      <td>$ {price}</td>
      <td>{amount}</td>
      <td>$ {price * amount}</td>
      <ToastContainer />
    </Fragment>
  );
};

export default ItemCartComponent;
