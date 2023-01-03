import React from "react"
import ReactDOM from "react-dom"

import App from "./components/App"

import "./main.scss"

// our songs and movies data
import data from "./constants/data"

ReactDOM.render(
  <App songsAndMovies={data} />,
  document.getElementById("app")
)
