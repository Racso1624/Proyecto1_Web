import React from "react";
import { HomeIcon, ExploreIcon, ShortsIcon, SubscriptionsIcon, LibraryIcon, HistoryIcon, MyVideosIcon, WatchListIcon, LikeIcon } from "./SideBar_Icons";
import "../styles/sidebar.sass"

const lista_iconos_1 = [<HomeIcon/>, <ExploreIcon/>, <ShortsIcon/>, <SubscriptionsIcon/>]
const lista_seccion_1 = ['Inicio', 'Explorar', 'Shorts', 'Subscripciones']

const lista_iconos_2 = [<LibraryIcon/>, <HistoryIcon/>, <MyVideosIcon/>, <WatchListIcon/>, <LikeIcon/>]
const lista_seccion_2 = ['Biblioteca', 'Historial', 'Mis vídeos', 'Ver más tarde', 'Vídeos que me gustan']

const SideBar = () =>(
    <div className="sidebar">
        <div className="seccion-1">
        {
            lista_iconos_1.map((elemento, posicion) => {
                return <div className="seccion-sidebar" key={posicion}>
                    {elemento}
                    {lista_seccion_1.shift()}
                </div>
            })
        }
        </div>
    </div>
)

export default SideBar