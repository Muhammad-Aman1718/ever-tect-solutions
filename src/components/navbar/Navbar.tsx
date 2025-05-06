import React from "react";

const Navbar = () => {
  return (
    <div className=" flex items-center justify-around  ">
      <div>
        <h1>IMG</h1>
      </div>
      <div>
        <ul className=" flex ">
          <li>Home</li>
          <li>Courses</li>
          <li>Services</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <button>Login</button>
    </div>
  );
};

export default Navbar;
