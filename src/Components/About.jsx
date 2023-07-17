import React from 'react'
import styled from 'styled-components'
import illustration from '../data/illustration.jpg'


const Container = styled.div`
    height: 600px;
    background-color:#f081a9;
    display: flex;
    align-items: center;
    
`
const AboutContainer = styled.div`
    
    width: 650px;
    padding: 55px;


`
const Heading = styled.h1`
    font-family: 'radley';
    font-size: 48px;
    color: #63696c;
    font-style: italic;
    font-weight: 100;
    
`
const Intro = styled.p`
    font-family: 'carlito';
    font-size: 25px;
    color: #e9d2da;

`

const Image = styled.img`
    height: 420px;
    width: 420px;
    border-radius: 50%;
    
    
`
export default function About() {
  return (
    <Container>
        <AboutContainer>
            <Heading>About Me</Heading>
            <Intro>
            Greetings! I'm Tanvi Sharma, a final year BE CSE undergraduate at UIET Panjab University. Passionate about web development and solving complex data structures and algorithms problems, 
            I find joy in creating robust and user-friendly web applications. 
            I'm constantly learning and striving to enhance my skills in order to create meaningful and user-friendly web applications.

            </Intro>
        </AboutContainer>
        <Image src = {illustration}/>
    </Container>
  )
}
