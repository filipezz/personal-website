import React from "react"

import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaEnvelope as Mail,
  FaLinkedin as Linkedin,
} from "react-icons/fa"

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3">
        <span style={{ color: "white" }}>Olá, eu sou o </span> <br />
        &#40;&#123;<span style={{ color: "#ff992c" }}> Filipe </span>
        &#125;&#41;
      </div>
      <div className="h1 code mt-4 mb-3" style={{ color: "#8be9fd	" }}>
        module.exports <span style={{ color: "#ff79c6" }}>= </span>
        <span style={{ color: "white" }}>{"{"}</span>
      </div>
      <div
        className="h4 mx-5 my-4 text-justify info"
        style={{ color: "#d3d3d3	" }}
      >
        Desenvolvedor Fullstack.{" "}
        <br />
        Apaixonado por desenvolver soluções coisas que facilitam a
        vida das pessoas.
        <br />
        Entusiasta de Javascript e Node. Sempre procurando alguma forma de botar
        o que aprendo em prática.
        <br />
        Sou um eterno estudante que adora programar, adora aprender e adora
        compartilhar o que sabe. 🤖
      </div>
      <div className="h1 code mt-2 mb-3">{"}"}</div>
      <div className="h1 mt-5 mb-5 footer ">
        <a className="mr-5 icon" href="https://twitter.com/filipeez">
          <Twitter />
        </a>
        <a className="mr-5 icon" href="https://github.com/filipezz">
          <Github />
        </a>
        <a className="mr-5 icon" href="mailto://filipezmarron@gmail.com">
          <Mail />
        </a>
        <a
          className="mr-5 icon"
          href="https://www.linkedin.com/in/filipemarron/"
        >
          <Linkedin />
        </a>
      </div>
    </div>
  )
}
