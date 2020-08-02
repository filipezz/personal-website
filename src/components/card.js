import React from "react"
import styled from "styled-components"

function card(props) {
  const { cardTitle, cardSubtitle, link, live, index } = props
    console.log(index %2 )
  return (
    
      
        <Container index={index} >
            <img src="https://scx1.b-cdn.net/csz/news/800/2018/website.jpg" alt=""/>
          <div>

          <h2 >{cardTitle}</h2>
          <p >{cardSubtitle}</p>
          <div >
            <a href={link}>
              Ver repositório
            </a>
            <a href={live}  hidden={live ? false : true}>
              Live demo
            </a>
          </div>
          </div>
         
        </Container>
      
   
  )
}

export default card

const Container = styled.div`
box-sizing:border-box;
padding:20px;
box-shadow: 6px 11px 7px 0px rgba(0,0,0,0.2);
border-radius:4px;
background:#262735;
margin-bottom:25px;
display:flex;
flex-direction: ${props => props.index % 2 === 0 ? 'row': 'row-reverse'};

h2{
  color: #f99000;
  margin:0;
}
>div{
  text-align:justify;
  margin:0 15px;
}
img{
  width:50%;
  border-radius:3px;
}

`