import React from "react";
import { HomeIcon, ExploreIcon, ShortsIcon, SubscriptionsIcon } from "./SideBar_Icons";
import "../styles/sidebar.sass"

var lista_iconos = [HomeIcon, ExploreIcon, ShortsIcon, SubscriptionsIcon]
var lista_seccion = ['Inicio', 'Explorar', 'Shorts', 'Subscripciones']

const SideBar = () =>(
    <div className="sidebar">
        {
            lista_iconos.map((elemento, posicion) => {
                return <div className="seccion-sidebar" key={posicion}>
                    <elemento/>
                </div>
            })
        }
    </div>
)

export default SideBar