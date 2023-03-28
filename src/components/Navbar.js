import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ activateCart }) => {
  return (
    <div className="flex justify-between sticky top-0 bg-gray-700 text-white">
      <img
        src="./images/audio_logo.jpg"
        alt="logo"
        className="h-20 border-2 border-gray-700"
      />
      <div className="flex justify-evenly">
        <a href="/" className="m-2">
          Home
        </a>
        <a href="/products" className="m-2">
          Products
        </a>
        <FontAwesomeIcon icon={faCartShopping} onClick={activateCart} />
      </div>
    </div>
  );
};

export default Navbar;
