import React from "react";
import { HomeIcon, ExploreIcon, ShortsIcon, SubscriptionsIcon, LibraryIcon, HistoryIcon, MyVideosIcon, 
        WatchListIcon, LikeIcon, ChannelsIcon, PremiumIcon, GamesIcon, LiveIcon, LearnIcon, SportsIcon, 
        ConfigurationIcon, ReportIcon, HelpIcon, SugerencyIcon, Subscripciones, MasYoutube } from "./SideBar_Icons";
import "../styles/sidebar.sass"

const lista_iconos_1 = [<HomeIcon/>, <ExploreIcon/>, <ShortsIcon/>, <SubscriptionsIcon/>]
const lista_seccion_1 = ['Inicio', 'Explorar', 'Shorts', 'Subscripciones']

const lista_iconos_2 = [<LibraryIcon/>, <HistoryIcon/>, <MyVideosIcon/>, <WatchListIcon/>, <LikeIcon/>]
const lista_seccion_2 = ['Biblioteca', 'Historial', 'Mis vídeos', 'Ver más tarde', 'Vídeos que me gustan']

const lista_iconos_3 = [<Subscripciones/>, <ChannelsIcon/>]
const lista_seccion_3 = ['', 'Explorar canales']

const lista_iconos_4 = [<MasYoutube/>, <PremiumIcon/>, <GamesIcon/>, <LiveIcon/>, <LearnIcon/>, <SportsIcon/>]
const lista_seccion_4 = ['', 'Youtube Premium', 'Videojuegos', 'Directo', 'Aprendizaje', 'Deportes']

const lista_iconos_5 = [<ConfigurationIcon/>, <ReportIcon/>, <HelpIcon/>, <SugerencyIcon/>]
const lista_seccion_5 = ['Configuración', 'Historial de denuncias', 'Ayuda', 'Enviar sugerencias']

const Seccion = (props) =>(
    <div className={props.seccion}>
        {
            props.iconos.map((elemento, posicion) => {
                return <div className="seccion-sidebar" key={posicion}>
                    {elemento}
                    {props.titulos.shift()}
                </div>
            })
        }
    </div>
)

const SideBar = () =>(
    <div className="sidebar">
        <Seccion seccion="seccion-1" iconos={lista_iconos_1} titulos={lista_seccion_1} />
        <Seccion seccion="seccion-2" iconos={lista_iconos_2} titulos={lista_seccion_2} />
        <Seccion seccion="seccion-3" iconos={lista_iconos_3} titulos={lista_seccion_3} />
        <Seccion seccion="seccion-4" iconos={lista_iconos_4} titulos={lista_seccion_4} />
        <Seccion seccion="seccion-5" iconos={lista_iconos_5} titulos={lista_seccion_5} />
        <div className="info">
            Información Prensa<br></br>
            Derechos de autor Contactar<br></br>
            Creadores Publicidad<br></br>
            Desarrolladores<br></br>
            <br></br>
            Términos Privacidad<br></br>
            Política y seguridad<br></br>
            Cómo funciona YouTube<br></br>
            Probar funciones nuevas<br></br>
        </div>
        <div className="credits">
            © 2022 Google LLC
        </div>
    </div>
)

export default SideBar