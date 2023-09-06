import React from 'react'
import styled, {css} from "styled-components"
import LogoImg from '../data/Logo.png'

const Container = styled.div`
    height: 650px;
    background-color: #e9d2da;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 768px) {
     height: auto;
  }
`
const LogoContainer = styled.div`
display: flex;
justify-content: center;
padding: 60px;

`
const Logo = styled.img`
    width: 70px;
    height: 70px;
    
`
const IntroContainer = styled.div`
    display: flex;
    justify-content: center;
`
const Hello = styled.h1`
    font-family: 'Radley', serif;
    font-size: 70px;
    color: #63696c;
    font-weight: 200;
    @media (max-width: 768px) {
    font-size: 40px; 
  }

`
const Name = styled.h1`
    font-family: 'Radley', serif;
    font-size: 70px;
    color: #f081a9;
    font-weight: 200;
    @media (max-width: 768px) {
    font-size: 40px; 
  }

`

const Intro = styled.p`
    font-size: 24px;
    font-family: 'carlito';
    text-align: center;
    padding: 20px 250px;
    color: #63696c;
    @media (max-width: 768px) {
    
        padding: 10px;
  }

    
`
const Button = styled.a`
  
  padding: 10px 20px;
  background-color: #f081a9;
  color: #63696c;
  text-decoration: none;
  border-radius: 15px;
  border: none;
  font-family: "radley";
  font-size: 20px;
  cursor: pointer;
  margin: 20px;

  &:hover{
  color: #e9d2da;
  background-color: #63696c;
  }
`;
export default function Header() {
  return (
    <Container>
        <LogoContainer>
        <Logo src= {LogoImg}/>
        </LogoContainer>
        <IntroContainer>
            <Hello>Hello,&nbsp;</Hello>
            <Name>I am Tanvi!</Name>
        </IntroContainer>
        <Intro>I am a full-stack web developer specializing in the MERN stack. I thrive on crafting innovative and dynamic web solutions.</Intro>
        <Button href="https://drive.google.com/file/d/14IeEzpiXu2kE351hXFMsK2HGp4mMz8Je/view?usp=sharing" target="_blank">
        Resume
        </Button>
    </Container>
  )
}
