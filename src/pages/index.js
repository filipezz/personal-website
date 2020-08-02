import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import { MdKeyboardArrowDown } from 'react-icons/md'

import Info from "../components/info"
import Card from "../components/card"

import "../style.css"
import styled from "styled-components"

function index({data}) {
  const projectList = data.allProjectsYaml.edges
  return (
    <Container>
      
      <Helmet>
        <meta charSet="utf-8" />
        <title> Home | Filipe Marron</title>
        <meta
          name="google-site-verification"
          content="H_T5IHaO3wq5Bi1lvXlgJq105uGg7_JjTsxkDgNKnCw"
        />
      </Helmet>
      <Info />
      
      <MdKeyboardArrowDown  size={120}/>

     
     
     
      
      
   
       {projectList.map(({ node }, index) => {
         return (
          <div  data-sal="slide-down"
          data-sal-duration="1000"
         
  >
           <Card
           
             cardTitle={node.title}
             cardSubtitle={node.subtitle}
             link={node.link}
             index={index}
             live={node.live}
           />
            </div>
           )
          })}
         
   
      
    </Container>
  )
}

export default index





export const query = graphql`
  {
    allProjectsYaml {
      edges {
        node {
          title
          subtitle
          link
          id
          live
        }
      }
    }
  }
`
const Container = styled.div`
max-width:1200px;
margin:0 auto;
display:flex;
flex-direction:column;

svg{
  align-self:center;

 }
}

`