import React from "react"
import "../style.css"
import Appbar from "../components/appbar"
import Info from "../components/info"
import { Helmet } from "react-helmet"

function index() {
  return (
    <div>
      <Appbar />
      <Info />
      <Helmet>
        <meta charSet="utf-8" />
        <title> Home | Filipe Marron</title>
        <meta
          name="google-site-verification"
          content="H_T5IHaO3wq5Bi1lvXlgJq105uGg7_JjTsxkDgNKnCw"
        />
      </Helmet>
    </div>
  )
}

export default index
