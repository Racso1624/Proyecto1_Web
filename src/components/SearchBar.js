import React from "react";
import Logo from "../images/youtube_logo.png"
import "../styles/searchbar.sass";
import { Video_Create, Menu, Apps, Notification, MicIcon, SearchIcon } from "./SearchBar_Icons";

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
        <Video_Create/>
        <Apps/>
        <Notification/>
    </div>
)

export default SearchBar