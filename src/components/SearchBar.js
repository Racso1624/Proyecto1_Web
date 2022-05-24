import React from "react";
import Logo from "../images/youtube_logo.png"
import "../styles/searchbar.sass";
import { Video_Create, Menu, Apps, Notification, MicIcon, SearchIcon } from "./SearchBar_Icons";

const SearchBar = () =>(
    <div className="searchbar">
        <Menu />
        <img className="logo" src={Logo} />
        <div className="searchbox">
            <div className="searchtext">Buscar</div>
            <div className="box"></div>
            <div className="searchbutton">
                <SearchIcon />
            </div>
        </div>
        <div className="micbutton">
            <MicIcon />
        </div>
        <Video_Create />
        <Apps />
        <Notification />
        <img id="img" 
            class="style-scope yt-img-shadow" 
            alt="Imagen del avatar" 
            height="32" 
            width="32" 
            src="https://yt3.ggpht.com/ytc/AKedOLS3WxnPjjjXbIzDXBhD9s2x65bPQKw4Aj_upNOJc3TGLo4tb02SpJRJeIsUEcMU=s88-c-k-c0x00ffffff-no-rj-mo">
        </img>
    </div>
)

export default SearchBar