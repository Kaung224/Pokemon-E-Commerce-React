import React, { useRef, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

function Navbar({ setSearchQuery }) {

  const inputRef = useRef();
  const [searchField, setSearchField] = useState("set.id");

  const handleSearch = () => {
    const inputValue = inputRef.current.value.trim().toLowerCase();
    if (inputValue) {
      setSearchQuery(`${searchField}:${inputValue}`);
      inputRef.current.value = "";
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="bg-[rgb(19,25,33)] text-white flex justify-between items-center pl-[30px] pr-[40px] fixed top-0 left-0 right-0 z-50 h-[70px] pt-2 pb-2 max-md:pl-[20px] max-md:pr-[20px]">
      <div className="w-[180px] mr-1.5">
        <Link to="/" className="header-link">
          <img src="./logo.png" alt="" className="w-[100px] mt-1.5" />
        </Link>
      </div>

      <div className="flex-1 max-w-[850px] min-w-[120px] ml-5 flex ">
        <input ref={inputRef} className="flex-1 w-0 text-lg h-[38px] pl-4 border-0 bg-white rounded-tl rounded-bl text-gray-600 outline-0" type="text" placeholder="Search...." onKeyDown={handleKeyDown} />
        <button className="bg-white border-0 w-[45px] h-[38px] rounded-tr rounded-br border-l-2 border-solid border-black shrink-0 flex items-center justify-center" onClick={handleSearch}>
          <img className="h-5 cursor-pointer" src="./search-icon.png" alt="search" />
        </button>
        <select className="mx-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm" onChange={(e) => setSearchField(e.target.value)}>
          <option value="set.id" className="text-black">Set ID</option>
          <option value="name" className="text-black">Name</option>
          <option value="types" className="text-black">Type</option>
          <option value="subtypes" className="text-black">Subtype</option>
          <option value="hp" className="text-black">HP</option>
        </select>
      </div>

      <div className="w-[350px] flex shrink-0 justify-end items-center max-md:w-[320px]">
        <Link to="/signin" className="header-link order-link">Sign In</Link>
        <Link to="/sell" className="header-link order-link">Sell With Us</Link>
        <Link to="/profile" className="header-link order-link">
          <i className="fas fa-user user-icon"></i>
        </Link>
        <Link className="header-link order-link relative w-[42px] flex items-center" to="/cart">
          <i className="fas fa-shopping-cart"></i>
          <div className="js-cart-quantity text-[16px] font-bold absolute top-1 left-[22px] w-[26px] text-center">3</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar