import React from "react";
import "../styles/topicsbar.sass"

var topic_list = ['Todo', 'Música', 'Videojuegos', 'En Directo', 'Bad Bunny', 
'Harry Styles', 'Tyler The Creator', 'Podcast', 'League of Legends', 'Gadgets', 
'Sonic The Hedgehog', 'Zapatillas', 'Outfits', 'Apple']

const TopicsBar = () =>(
    <div className="topicsbar">
        {
            topic_list.map((elemento, posicion) =>{
                return <div className="topicbutton" key={posicion.toString()}>{elemento}</div>
            })
        }
    </div>
)

export default TopicsBar