import React from "react";
import Logo from "../images/youtube_logo.png"
import "../styles/searchbar.sass";
import { Video_Create, Menu, Apps, Notification, MicIcon, SearchIcon } from "./SearchBar_Icons";
import User from "../images/user.png"

const SearchBar = () =>(
    <div className="searchbar">
        <Menu/>
        <img className="logo" src={Logo} />
        <div className="searchbox">
            <div className="searchtext">Buscar</div>
            <div className="box"></div>
            <div className="searchbutton">
                <SearchIcon/>
            </div>
        </div>
        <div className="micbutton">
            <MicIcon/>
        </div>
        <div className="search-bar-icons">
            <Video_Create/>
            <Apps/>
            <Notification/>
            <img src={User} className="icon-profile"/>
        </div>
    </div>
)

export default SearchBar