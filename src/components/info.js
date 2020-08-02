import React from "react"
import styled from 'styled-components'
import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaEnvelope as Mail,
  FaLinkedin as Linkedin,
} from "react-icons/fa"

export default function info() {
  return (
    <Container >
      
      <Title >
        <span style={{ color: "white" }}>Olá, eu sou o </span> <br />
        &#40;&#123;<span style={{ color: "#ff992c" }}> Filipe </span>
        &#125;&#41;
      </Title>
      <ModuleExports  style={{ color: "#8be9fd	" }}>
        module.exports <span style={{ color: "#ff79c6" }}>= </span>
        <span style={{ color: "white" }}>{"{"}</span>
      </ModuleExports>
      <Code
        
        style={{ color: "#d3d3d3	" }}
      >
        Desenvolvedor Fullstack.{" "}
        <br />
        Apaixonado por desenvolver soluções que facilitam a
        vida das pessoas.
        <br />
        Entusiasta de Javascript e Node. Sempre procurando alguma forma de botar
        o que aprendo em prática.
        <br />
        Sou um eterno estudante que adora programar, adora aprender e adora
        compartilhar o que sabe. 🤖
      </Code>
      <span >{"}"}</span>
      
    </Container>
  )
}
const Container = styled.div`

>span{
  font-size:3rem;
}


}
`

const Title = styled.div`
font-size:4.5rem;
`
const ModuleExports = styled.div`
font-size:3rem;
`
const Code = styled.div`
font-size: 1.4rem;
text-align:justify;
margin:0 2em;
`