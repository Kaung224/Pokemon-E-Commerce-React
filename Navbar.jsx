import React, { useRef } from "react";
import './navbar.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

function Navbar({ setSearchQuery }) {

  const inputRef = useRef();

  const handleSearch = () => {
    const inputValue = inputRef.current.value.trim().toLowerCase();
    if (inputValue) {
      console.log("Setting search query to:", `name:${inputValue}`);
      setSearchQuery(`name:${inputValue}`);
      inputRef.current.value = "";
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-left-section">
        <Link to="/" className="header-link">
          <img src="./logo.png" alt="" className="logo" />
        </Link>
      </div>

      <div className="navbar-middle-section">
        <input ref={inputRef} className="search-bar" type="text" placeholder="Search...." onKeyDown={handleKeyDown} />
        <button className="search-button" onClick={handleSearch}>
          <img className="search-icon" src="./search-icon.png" alt="search" />
        </button>
      </div>

      <div className="navbar-right-section">
        <Link to="/signin" className="header-link order-link">Sign In</Link>
        <Link to="/sell" className="header-link order-link">Sell With Us</Link>
        <Link to="/profile" className="header-link order-link">
          <i className="fas fa-user user-icon"></i>
        </Link>
        <Link className="cart-link header-link order-link" to="/cart">
          <i className="fas fa-shopping-cart cart-icon"></i>
          <div className="cart-quantity js-cart-quantity">3</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar