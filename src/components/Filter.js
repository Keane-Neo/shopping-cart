import React from "react";
import { useState } from "react";

const Filter = ({ handleMyClick }) => {
  const [htlFilterOn, sethtlFilterOn] = useState(true);
  const [lthFilterOn, setlthFilterOn] = useState(true);
  const [headphonesFilterOn, setheadphonesFilterOn] = useState(true);
  const [earphonesFilterOn, setearphonesFilterOn] = useState(true);

  const handlehtl = () => {
    sethtlFilterOn(!htlFilterOn);
    return htlFilterOn;
  };

  const handlelth = () => {
    setlthFilterOn(!lthFilterOn);
    return lthFilterOn;
  };

  const handleheadphones = () => {
    setheadphonesFilterOn(!headphonesFilterOn);
    return headphonesFilterOn;
  };

  const handleearphones = () => {
    setearphonesFilterOn(!earphonesFilterOn);
    return earphonesFilterOn;
  };

  return (
    <div className="flex flex-col w-1/5 max-h-full bg-slate-500 text-white">
      <p className="text-center bg-slate-900">Filter by</p>
      <div className="p-2">
        <p>Price:</p>
        <input
          type="checkbox"
          id="htl"
          value="htl"
          onClick={() => handleMyClick(handlehtl(), "htl")}
        ></input>
        <label htmlFor="htl"> Highest to Lowest</label>
        <br />
        <input
          type="checkbox"
          id="lth"
          value="lth"
          onClick={() => handleMyClick(handlelth(), "lth")}
        ></input>
        <label htmlFor="lth"> Lowest to Highest</label>
        <br />
        <br />
        <p>Type:</p>
        <input
          type="checkbox"
          id="Headphones"
          value="Headphones"
          onClick={() => handleMyClick(handleheadphones(), "headphones")}
        ></input>
        <label htmlFor="Headphones"> Headphones</label>
        <br />
        <input
          type="checkbox"
          id="Earphones"
          value="Earphones"
          onClick={() => handleMyClick(handleearphones(), "earphones")}
        ></input>
        <label htmlFor="Earphones"> Earphones</label>
      </div>
    </div>
  );
};

export default Filter;
