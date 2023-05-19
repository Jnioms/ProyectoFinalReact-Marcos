import React, { useState, useEffect } from "react";

const ItemCounterBtn = (props) => {
  const { stock, sendToParent } = props;
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    sendToParent(counter)
  });

  const addUnit = () => {
    return counter < stock ? setCounter(counter + 1) : setCounter(stock);
  };

  const removeUnit = () => {
    return counter > 1 ? setCounter(counter - 1) : setCounter(1);
  };

  return (
    <div className="input-group input-group-sm pt-3">
      <div className="input-group-prepend">
        <button
          className="btn btn-outline-danger"
          type="button"
          onClick={removeUnit}
        >
          -
        </button>
      </div>
      <input
        type="text"
        placeholder={counter}
        className="form-control text-center"
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-success"
          type="button"
          onClick={addUnit}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCounterBtn;
