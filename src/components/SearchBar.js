import React from "react";
import Logo from "../images/youtube_logo.png"
import "../styles/searchbar.sass";

const SearchBar = () =>(
    <div className="searchbar">
        <img src={Logo} />
    </div>
)

export default SearchBar