import React from "react";
import './navbar.css'
import "@fortawesome/fontawesome-free/css/all.min.css";

function Navbar({ setSearchQuery }) {
  const handleSearch = () => {
    const inputValue = document.querySelector('.search-bar').value.trim().toLowerCase()
    if (inputValue) setSearchQuery(`name:${inputValue}`)
    document.querySelector('.search-bar').value = ""
  }

  return (
    <div className="navbar">
      <div className="navbar-left-section">
        <a href="index.html" className="header-link">
          <img src="./public/logo.png" alt="" className="logo" />
        </a>
      </div>

      <div className="navbar-middle-section">
        <input className="search-bar" type="text" placeholder="Search...." />

        <button className="search-button">
          <img className="search-icon" src="./public/search-icon.png" onClick={handleSearch} />
        </button>
      </div>

      <div className="navbar-right-section">
        <a href="#" className="header-link order-link">Sign In</a>
        <a href="#" className="header-link order-link">Sell With Us</a>
        <a href="#" className="header-link order-link">
          <i className="fas fa-user user-icon"></i>
        </a>
        <a className="cart-link header-link order-link" href="#">
          <i className="fas fa-shopping-cart cart-icon"></i>
          <div className="cart-quantity js-cart-quantity">3</div>
        </a>
      </div>
    </div>
  );
}

export default Navbar