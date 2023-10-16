import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc } from './ProjectsStyle'




const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title></Title>
        <Desc>
          
        </Desc>
       
     
      </Wrapper>
    </Container>
  )
}

export default Projects