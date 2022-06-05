import React from "react";
import "../styles/video.sass"

const Video = (props) =>(
    <div className="video">
        <img className="thumbnail" src={props.link}/>
        <div className="description">
            <div className="profile-picture">
                <img className="profile" src={props.profile}/>
            </div>
            <div className="description-text">
                <div className="title">
                    {props.title}
                </div>
                <div className="channel-name">
                    {props.channel}
                </div>
                <div className="statistics">
                    {props.views} visualizaciones •
                    hace {props.hours} horas
                </div>
            </div>
        </div>
    </div>
)

export default Video