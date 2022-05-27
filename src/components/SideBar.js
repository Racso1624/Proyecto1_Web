import React from "react";
import { HomeIcon, ExploreIcon, ShortsIcon, SubscriptionsIcon, LibraryIcon, HistoryIcon, MyVideosIcon, WatchListIcon, LikeIcon } from "./SideBar_Icons";
import "../styles/sidebar.sass"

const lista_iconos = [<HomeIcon/>, <ExploreIcon/>, <ShortsIcon/>, <SubscriptionsIcon/>, <LibraryIcon/>, <HistoryIcon/>, <MyVideosIcon/>, <WatchListIcon/>, <LikeIcon/>]
const lista_seccion = ['Inicio', 'Explorar', 'Shorts', 'Subscripciones', 'Biblioteca', 'Historial', 'Mis vídeos', 'Ver más tarde', 'Vídeos que me gustan']

const lista_secciones = ['seccion-1', 'seccion-2', 'seccion-3', 'seccion-4', 'seccion-5']

const SideBar = () =>(
    <div className="sidebar">
        {
            lista_secciones.map((seccion, posicion_seccion) => {
                return <div className={seccion} key={posicion_seccion}>
                    {
                        lista_iconos.map((elemento, posicion) => {
                            return <div className="seccion-sidebar" key={posicion}>
                                {lista_iconos.shift()}
                                {lista_seccion.shift()}
                            </div>
                        })
                    }
                </div>
            })
        }
    </div>
)

export default SideBar