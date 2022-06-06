import React from "react";
import Video from "./Video";
import User from "../images/user.png"
import "../styles/maincontent.sass"

const videos_list = [["https://i.ytimg.com/vi/VaF92M2dKmQ/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBGDyQ6vahINDWsGF5mb2fKLoB21w", User, "Harry Styles - As It Was in the Live Lounge", "BBC", "1M", "13 horas"],
["https://i.ytimg.com/vi/qM8YWZvgsJM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFt3odlbQ4GlX4Lw5wU1KbgTaGfQ", User, "Dad Reacts to Frank Ocean - Blonde", "turning the tables", "1M", "8 meses"],
["https://i.ytimg.com/vi/zahV9gh5oSE/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqyw6XIi4W21wE6ZJO8E2SdTXiZg", User, "Tyler, the Creator - Flower Boy (album reaction)", "path reacts", "64.597", "3 meses"],
["https://i.ytimg.com/vi/ECgFc52FouU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAFHH0D30RrG_jIY5j8dRR08xhJFw", User, "boy pablo - hey girl", "boy pablo", "1M", "13 horas"],
["https://i.ytimg.com/vi/Lzi7ljJiLJQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBj47BWTU60zFLYmHBnCKStRPrUSg", User, "boy pablo - Everytime", "777tv", "44M", "5 años"],
["https://i.ytimg.com/vi/l96zmDlWCBk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAiaN8JnXN8gXix_nOY5RaB6JHwEA", User, "Chainsaw Man | OFFICIAL TRAILER", "Crunchyroll Collection", "3,7M", "2 semanas"],
["https://i.ytimg.com/vi/wI-fyoZqBQI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDBZMwoxcA18owfcYSKRFFTruk1OA", User, "The Genius of IGOR", "Middle 8", "2,1M", "2 años"],
["https://i.ytimg.com/vi/F4neLJQC1_E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5bvdDFkuWALUQbiS6JRl1MWotnA", User, "Dua Lipa: Tiny Desk (Home) Concert", "NPR Music", "82M", "1 año"],
["https://i.ytimg.com/vi/Lqvwm3zAILI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCg81NkKTu9iqE49AUB1k9Uc1uZyw", User, "Tyler, The Creator - CORSO (Official Video)", "Tyler, The Creator", "10M", "11 meses"],
["https://i.ytimg.com/vi/-pTGc7cIBIA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBzqzGhQci2cDVsetB1kS2AoTdJJQ", User, "My Everyday Tech: 2022!", "Marques Brownlee", "3.6M", "4 meses"],
["https://i.ytimg.com/vi/NkMTKGM-efw/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBPO_wFMmLjzzoVeeDtmTTgQKr7sg", User, "BEST INTEREST", "Tyler, The Creator", "22M", "2 años"],
["https://i.ytimg.com/vi/_k-F-MMvQV4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBNVaHZXPfFySftL39nZD8uweKHHg", User, "10 Programmer Stereotypes", "Fireship", "635.478", "2 semanas"]]

const MainContent = () =>(

    <div className="main-content">
        <div className="video-content">
            {
                videos_list.map((element, index) =>{
                    return <Video link={element[0]} profile={element[1]} title={element[2]} channel={element[3]} views={element[4]} hours={element[5]}/>
                })
            }
        </div>
    </div>

)

export default MainContent