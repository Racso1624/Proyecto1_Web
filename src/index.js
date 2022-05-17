import React from "react";
import ReactDOM from "react-dom/client";
import "/src/styles.css";

const App = () =>{

    return(
        <div className="app">
            <div></div>
        </div>
    )

}

const container = document.getElementById("root")

const root = ReactDOM.createRoot(container)

root.render(<App />)