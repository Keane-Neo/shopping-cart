import React from "react";
import Filter from "./Filter";
import Navbar from "./Navbar";
import { Products } from "./Products";
import { useState } from "react";
import Modal from "./Modal";
import Cart from "./Cart";

const Shop = () => {
  const [filter, setFilter] = useState(false);
  const [filterType, setFilterType] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cost, setCost] = useState(0);

  const handleClick = (a, b) => {
    setFilter(a);
    setFilterType(b);
  };

  let newProducts = null;

  if (filter) {
    if (filterType === "lth")
      newProducts = Products.sort((a, b) => (a.price > b.price ? 1 : -1));
    if (filterType === "htl")
      newProducts = Products.sort((b, a) => (a.price > b.price ? 1 : -1));
    if (filterType === "earphones")
      newProducts = Products.filter((item) => item.type === "earphone");
    if (filterType === "headphones")
      newProducts = Products.filter((item) => item.type === "headphone");
  } else newProducts = Products;

  const activateModal = (item) => {
    setShowModal(true);
    setSelectedItem(item);
  };
  const handleClose = () => {
    setShowModal(false);
    setSelectedItem({});
  };

  const handleAddToCart = (item) => {
    addCartItem(item);
    setShowModal(false);
    setSelectedItem({});
  };

  const addCartItem = (item) => {
    setCartItems([...cartItems, item]);
    setCost(cost + item.price);
  };

  const removeCartItem = (item) => {
    setCartItems(cartItems.filter((carditem) => carditem.id !== item.id));
  };

  const updateCartItem = (item, quantity) => {
    setCartItems(
      cartItems.map((cartitem) =>
        cartitem.id === item.id ? { ...cartitem, quantity } : cartitem
      )
    );
    console.log(cartItems);
  };

  const handleIncrement = (item) => {
    updateCartItem(item, item.quantity + 1);
    setCost(cost + item.price);
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      updateCartItem(item, item.quantity - 1);
      setCost(cost - item.price);
    } else {
      removeCartItem(item);
      setCost(cost - item.price);
    }
  };

  const handleExit = () => {
    setShowCart(false);
  };

  return (
    <div>
      <Navbar activateCart={() => setShowCart(true)} />
      {showCart && (
        <Cart
          cartItems={cartItems}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
          handleExit={handleExit}
          cost={cost}
        />
      )}
      <div className="flex">
        <Filter handleMyClick={handleClick} />
        <div className="grid grid-cols-2 w-9/12 gap-5 p-5">
          {newProducts.map((item) => {
            return (
              <div
                key={item.id}
                className="col-span-1 flex flex-col justify-center items-center border-2 border-pink-600 h-80 w-50 "
              >
                <img
                  className="h-60 "
                  src={item.img}
                  alt={item.text}
                  onClick={() => activateModal(item)}
                />
                <p className="mt-4">
                  <strong>{item.text}</strong>
                </p>
                <p>${item.price}</p>
              </div>
            );
          })}
          {showModal && (
            <Modal
              item={selectedItem}
              handleClose={handleClose}
              handleAddToCart={handleAddToCart}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default Shop;
