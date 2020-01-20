import React from "react"

function card(props) {
  const { cardTitle, cardSubtitle, link, live } = props
  return (
    <div className="col-lg-4">
      <div className="card mx-3 my-5">
        <div className="card-body">
          <h2 className="card-title">{cardTitle}</h2>
          <p className="card-text">{cardSubtitle}</p>
          <div className="links">
            <a href={link} className="card-link">
              Ver repositório
            </a>
            <a href={live} className="card-link" hidden={live ? false : true}>
              Live demo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default card
