import React from "react";
import Logo from "../images/youtube_logo.png"
import Menu from "../images/menu.png"
import SearchIcon from "../images/search_icon.png"
import "../styles/searchbar.sass";

const SearchBar = () =>(
    <div className="searchbar">
        <img className="menu" src={Menu} />
        <img className="logo" src={Logo} />
        <div className="searchbox">
            <div className="box"></div>
            <div className="searchbutton">
                <img className="searchicon" src={SearchIcon} />
            </div>
        </div>
    </div>
)

export default SearchBar