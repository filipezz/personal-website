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
          content="kBiaj0PQmcxgt5hAoQppwTxZX_NdUMBh_jYvFEW__u8"
        />
      </Helmet>
    </div>
  )
}

export default index
