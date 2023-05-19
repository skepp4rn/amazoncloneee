import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-amazon_blue p-1 flex items-center">
      <Link to="/">
        <img
          className="w-24 m-2"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
        />
      </Link>
      <div className="flex items-center flex-grow sm:flex-grow-0">
        <input className="h-10 w-full sm:w-56 rounded-full p-2" type="text" />
        <button className="bg-yellow-400 rounded-r-full p-2">
          🔍
        </button>
      </div>
      <nav className="text-black flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
        <Link to="/login" className="link">
          Hello, Sign in
        </Link>
        <Link to="/orders" className="link">
          Returns & Orders
        </Link>
        <Link to="/checkout" className="link">
          Your Cart
        </Link>
      </nav>
    </header>
  );
}

export default Header;
