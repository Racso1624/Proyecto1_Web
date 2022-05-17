import React from "react";
import Logo from "../images/youtube_logo.png"
import Menu from "../images/menu.png"
import "../styles/searchbar.sass";

const SearchBar = () =>(
    <div className="searchbar">
        <img className="menu" src={Menu} />
        <img className="logo" src={Logo} />
        <div className="search"></div>
    </div>
)

export default SearchBar