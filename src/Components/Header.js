import React, { useState } from 'react'
import logo from "../Images/ms2.jpg"
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ArrowIcon from '@mui/icons-material/ArrowDropDown';
import { useStateValue } from "./StateProvider.js";

function Header() {
  const [{basket}] = useStateValue();

  const [isGroupSelected, setIsGroupSelected] = useState(false);

  const handleClick = () => {
    setIsGroupSelected(!isGroupSelected);
  }

  return (
    <nav className="header">

      <div className="left">

      <Link to="/">
      <img className="header_logo" src={logo} alt="Amazon_logo" />
      </Link>

      <Link to="/add" className="header_link">
      <div className="header_add">
      <span className="para">Add an Item</span>
      <AddIcon className="header_addIcon" />
      </div>
      </Link>

      </div>

      <div className="center">
      <div className="header_search">
        <input type="text"  className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      </div>

      <div className="right">
      <div className="header_nav">

        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Hello User</span>
            <span className="header_optionLineTwo">Sign In</span>
          </div>
        </Link>

        
          <div className="header_option">
            <div className="header_f">
            <span className="header_optionLineOne">Your</span> 
            <ArrowIcon className="header_arrow" onClick={handleClick} />
            {isGroupSelected && (
             <span>
               <select className="add_trans header_drop">
                <option value="group1">Group 1</option>
                <option value="group2">Group 2</option>
                <option value="group3">Group 3</option>
              </select> 
            </span>
          )}
            </div>
            <span className="header_optionLineTwo">Groups</span>
          </div>
  

        <Link to="/checkout" className="header_link">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_optionBasketCount">{basket?.length}</span>
          </div>
        </Link>

      </div>
      </div>

    </nav>
  );
}  

export default Header;



