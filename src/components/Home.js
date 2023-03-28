import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div
        className="bg-cover bg-center h-screen flex justify-center items-center"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2018/01/16/10/18/headphones-3085681_960_720.jpg')",
        }}
      >
        <div className="text-center text-5xl font-extralight text-baseline text-yellow-200">
          The best headphones in town! Click{" "}
          <a href="/products">
            <em>here</em>
          </a>{" "}
          to start browsing our wide range of products
        </div>
      </div>
    </div>
  );
};

export default Home;
