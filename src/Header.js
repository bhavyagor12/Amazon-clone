import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from "./StateProvider"

import { auth } from "./firebase";
function Header() {

  const [{basket,user} ] = useStateValue();
  
  const login =() =>{
    if(user){
      auth.signOut();
    }
  }
  
  return (

    <nav className="header">
      

      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      

      <div className="headerNav">
      <Link to={!user && "/login"} className="header__link">
      <div onClick={login} className="header__option">
      <span className="header__optionlineOne">Hello {user?.email}</span>
      <span className="header__optionlineTwo" >{user ?'Sign Out' :'Sign in'}</span>
      </div>
      </Link>

      <Link to="/" className="header__link">
      <div className="header__option" >
      <span className="header__optionlineOne">Returns</span>
      <span className="header__optionlineTwo">& Orders </span>
      </div>
      </Link>

      <Link to="/" className="header__link">
      <div className="header__option">
      <span className="header__optionlineOne">Your</span>
      <span className="header__optionlineTwo" >Prime</span>
      </div>
      </Link>

      </div>

   
      <Link to="/checkout" className="header__link">
        <div className="header__optionBasket">
        <ShoppingBasketIcon />
        <span className="header__optionlineTwo" className="header__basketCount">{basket?.length}</span>
        </div>
      </Link>
     
    </nav>
  

  );
}

export default Header;
