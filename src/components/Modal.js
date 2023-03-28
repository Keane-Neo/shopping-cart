import React from "react";

const Modal = ({ item, handleClose, handleAddToCart }) => {
  return (
    <div className="w-full h-full top-0 bottom-0 left-0 right-0 fixed backdrop-blur">
      <div className=" bg-gray-800 w-3/5 h-3/5 ml-96 mt-40 text-white fixed">
        <div
          onClick={handleClose}
          className="absolute top-0 right-0 cursor-pointer"
        >
          <strong>X</strong>
        </div>
        <img
          src={item.img}
          alt={item.text}
          className="h-5/6 w-1/2 object-cover absolute left-5 top-10 "
        />
        <div className="absolute top-40 right-40">
          <p className=" text-xl">{item.text}</p>
          <br />
          <p className="text-lg text-center">${item.price}.00</p>
          <br />
          <button
            type="text"
            className="border-2 bg-red-700 w-60"
            onClick={() => handleAddToCart(item)}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
