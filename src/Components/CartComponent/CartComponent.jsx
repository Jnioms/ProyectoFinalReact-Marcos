import React, { useContext, useMemo, useState } from "react";
import CartContext from "../../Context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";

const nameCollection = "orders";

const CartComponent = () => {
  const { cart, emptyCart } = useContext(CartContext);
  const [mail, setMail] = useState();

  const cartTotal = useMemo(() => {
    return cart.reduce(
      (partialSum, item) => partialSum + item[1] * item[0].price,
      0
    );
  }, [cart]);

  const checkMail = () => {
    return(mail ? mail : setMail("mail@example.com") );
  }
  
  const order = useMemo(() => {
    const items = cart.map((item) => ({ item }));
    return { items, mail };
  }, [cart, mail]);

  const actionBuy = () => {
    const db = getFirestore();
    const orderCollection = collection(db, nameCollection);
    addDoc(orderCollection, order).then(({ id }) => {
      toast.success(`Mail sent to ${mail} with the order id: ${id}`);
      emptyCart();
    });
  };

  return (
    <div>
          <h5>Enter mail:</h5>
          <input
            className="form-control"
            type="text"
            placeholder="mail@example.com"
            required
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <table>
            <tbody>
              <tr>
                <td className="h5">Products: </td>
                <td className="h5"> {" " + cart.length + " "} units</td>
              </tr>
              <tr>
                <td className="h5">Total: </td>
                <td className="h5">${cartTotal}</td>
              </tr>
              <tr>
                <td>
                  <button
                    disabled={cart.length === 0}
                    onClick={() => {
                      checkMail();
                      actionBuy();}}
                    className="btn btn-primary mt-5"
                  >
                    Buy now!
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
      <ToastContainer />
    </div>
  );
};

export default CartComponent;
