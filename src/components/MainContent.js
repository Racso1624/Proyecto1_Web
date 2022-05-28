import React from "react";
import "../styles/maincontent.sass"

const Content = (props) =>(
    <div className="video">
        <img className="thumbnail" src={props.link}/>
        <div className="profile-picture">
            <img className="profile" src={props.profile}/>
        </div>
        <div className="title">
            {props.title}
        </div>
        <div className="channel-name">
            {props.channel}
        </div>
        <div className="statistics">
            {props.views} visualizaciones <br></br>
            hace {props.hours} horas
        </div>
    </div>
)

const MainContent = () =>(

    <div className="main-content">
        <Content link="https://i.ytimg.com/vi/VaF92M2dKmQ/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBGDyQ6vahINDWsGF5mb2fKLoB21w"
        profile="https://yt3.ggpht.com/ytc/AKedOLRG_0HFQR5XZ0rWQTvmfoYpM2zLLZjePQkZ6EoF=s68-c-k-c0x00ffffff-no-rj"
        title="Harry Styles - As It Was in the Live Lounge"/>
    </div>

)

export default MainContent