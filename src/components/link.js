import React from "react"
import Link from "gatsby-plugin-transition-link/AniLink"

export default function Intent({ children, to }) {
  return (
    <Link cover direction="down" bg="rgb(36, 36, 36)" duration={1} to={to}>
      {children}
    </Link>
  )
}
