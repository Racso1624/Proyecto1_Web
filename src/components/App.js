import React from "react";
import SearchBar from "./SearchBar";
import TopicsBar from "./TopicsBar"
import SideBar from "./SideBar";
import MainContent from "./MainContent";
import "../styles/app.sass";

const App = () =>(

    <div>
        <SearchBar/>
        <TopicsBar/>
        <SideBar/>
        <MainContent/>
    </div>
)

export default App