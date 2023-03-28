import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  return (
    <div className="w-full h-full top-0 bottom-0 left-0 right-0 backdrop-blur fixed">
      <div className="flex flex-col absolute right-0 h-full w-1/4 bg-white align-middle">
        <h1>Your Shopping Cart</h1>
        {cartItems.filter.map((item) => (
          <div key={item.id} className="border-3 border-black bg-white flex">
            <img className="h-20 w-20 mr-10" src={item.img} alt={item.text} />
            <div className="flex flex-col justify-center align-middle">
              <h2>{item.text}</h2>
              <h2>${item.price}</h2>
              <div className="flex justify-evenly">
                <button onClick={() => handleDecrement(item)}>
                  <FontAwesomeIcon icon={faMinus} />
                </button>

                <h2>{item.quantity}</h2>
                <button onClick={() => handleIncrement(item)}>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
