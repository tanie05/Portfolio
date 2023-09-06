import React from 'react'
import styled, {css} from 'styled-components'
import illustration from '../data/illustration.jpg'

const Container = styled.div`
  background-color: #f081a9;
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 5px; 
    flex-direction: column; 
  }
`;

const AboutContainer = styled.div`
  width: 650px;
  padding: 55px;

  @media (max-width: 768px) {
    width: 100%; 
    padding: 20px;
  }
`;

const Heading = styled.h1`
  font-family: 'radley';
  font-size: 48px;
  color: #63696c;
  font-style: italic;
  font-weight: 100;

  @media (max-width: 768px) {
    font-size: 36px; 
    text-align: center; 
  }
`;

const Intro = styled.p`
  font-family: 'carlito';
  font-size: 25px;
  color: #e9d2da;

  @media (max-width: 768px) {
    font-size: 18px; 
    text-align: center; 
  }
`;

const Image = styled.img`
  height: 420px;
  width: 420px;
  border-radius: 50%;

  @media (max-width: 768px) {
    height: auto; 
    width: 100%; 
  }
`;

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
