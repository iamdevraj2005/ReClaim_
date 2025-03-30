import React, { useEffect, useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";

function Navbar() {
  const [authUser, setAuthUser] = useAuth();
  const [cart, setCart] = useState({ electronics: 1, books: 2, furniture: 1 });

  // Function to increase product quantity
  const increaseQuantity = (product) => {
    setCart((prevCart) => ({ ...prevCart, [product]: prevCart[product] + 1 }));
  };

  // Function to decrease product quantity
  const decreaseQuantity = (product) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart, [product]: Math.max(0, prevCart[product] - 1) };
      if (updatedCart.books === 0) delete updatedCart.books; // Remove Books when it reaches 0
      return updatedCart;
    });
  };

  // Force dark theme
  useEffect(() => {
    const element = document.documentElement;
    element.classList.add("dark");
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const totalCartItems = cart.electronics + cart.furniture + (cart.books > 0 ? cart.books : 0);

  const navItems = (
    <>
      <li><a href="/">Home</a></li>
      <li><a href="/Electronics">Electronics</a></li>
      {cart.books > 0 && <li><a href="/Books">Books</a></li>}
      <li><a href="/Furniture">Furniture</a></li>
      <li><a href="/Clothes">Clothes</a></li>
      <li>
        <a href="/Contact" className="relative bg-red-600 px-3 py-2 rounded-md text-white hover:bg-red-700 duration-300 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l1 6h13l1-6h2M4 10h16v10H4V10z"
            />
          </svg>
          {totalCartItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full px-2">{totalCartItems}</span>
          )}
        </a>
      </li>
    </>
  );

  return (
    <div
      className={`max-w-screen-2xl container mx-auto md:px-20 px-4 bg-blue-600 text-white fixed top-0 left-0 right-0 z-50 ${
        sticky ? "shadow-md bg-blue-700 transition-all duration-300 ease-in-out" : ""
      }`}
    >
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-700 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <a className="text-2xl font-bold cursor-pointer">Reclaim</a>
        </div>
        <div className="navbar-end space-x-3">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
          <div className="hidden md:block">
            <label className="px-3 py-2 border border-blue-500 rounded-md flex items-center gap-2 bg-blue-700">
              <input
                type="text"
                className="grow outline-none rounded-md px-1 bg-blue-700 text-white"
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          {authUser ? (
            <Logout />
          ) : (
            <div>
              <a
                className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 duration-300 cursor-pointer"
                onClick={() => document.getElementById("my_modal_3").showModal()}
              >
                Login
              </a>
              <Login />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
