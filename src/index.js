import React from "react";
import ReactDOM from "react-dom/client";
import App from "/src/components/App.js"
import { hydrateRoot } from 'react-dom/client'

const container = document.getElementById("root")

const root = ReactDOM.createRoot(container)

root.render(<App />)

// const container = document.getElementById('root')
// hydrateRoot(container, <App />)