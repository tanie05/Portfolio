import React from 'react'
import styled from 'styled-components'
import BlogMuse from '../data/BlogMuse.png'
import ExpenseTracker from '../data/ExpenseTracker.png'
import todo from '../data/Todolist.png'
const Container = styled.div`
    
    background-color: #fdfbfc;
    
`
const HeadingContainer = styled.div`
    text-align: center;
    padding: 50px;

`
const Heading = styled.h1`
    font-size: 48px;
    font-family: 'radley';
    font-weight: 100;
    color: #f081a9;
    
`
const Description = styled.p`
    font-family: 'carlito';
    font-size: 18px;
    color: #63696c;


`
const ProjectContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 30px 50px;
    margin-bottom: 60px;
    

`
const Project = styled.div`
    flex: 1;
    margin: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    background-color: #e9d2da;
    &:hover {
    
    background-color: #f081a9;
  }

`
const Image = styled.img`
    height: 214px;
    width: 310px;
    padding: 15px;

`
const Name = styled.a`

    font-family: 'radley';
    font-size: 25px;
    text-decoration: none;
    text-align: center;
    padding: 10px;
    color: #63696c;
    font-weight: 200;

   

`

export default function Projects() {
  const projects = [
    {
        id:1,
        title:"BlogMuse",
        description: "",
        link : "https://rainbow-churros-8925ee.netlify.app/",
        img : BlogMuse,
    },
    {
        id:2,
        title: "Expense Tracker",
        description: "",
        link : "https://resilient-selkie-0e621d.netlify.app/",
        img: ExpenseTracker,
    },
    {
        id:3,
        title: "To Do List Using ReactJS",
        description: "",
        link : "https://tanie05.github.io/todolist/",
        img: todo,
    },
    

  ]
  const project = projects.map((item) => {
    return (
        <Project>
            
            <Name href={item.link} target="_blank" rel="noopener noreferrer" >
                <Image src = {item.img} style={{opacity: "0.90"}}/>
                {item.title}
            </Name>

        </Project>
    )
  })
  return (
    <Container>
        <HeadingContainer>
            <Heading>Project Gallery</Heading>
            <Description>
            Here are some of the projects I created that showcase my skills and creativity.
            </Description>
        </HeadingContainer>
        <ProjectContainer>
            {project}
        </ProjectContainer>
        

    </Container>
  )
}
