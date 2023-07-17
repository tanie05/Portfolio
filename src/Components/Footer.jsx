import React from 'react'
import styled from 'styled-components'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Container = styled.div`
    background-color: #63696c;
    padding: 70px 50px;
    color: #fdfbdc;
    text-align: center;
`

const SubContainer = styled.div`
    padding: 20px;
`
const Heading = styled.h1`
    font-size: 48px;
    font-family: 'radley';
    font-weight: 100;
`
const SubHeading = styled.p`
    font-family: 'carlito';
    font-size: 20px;
`
const Email = styled.p`
    font-family: 'radley';
    font-size: 20px;

`
const IconContainer = styled.div`
    display: flex;
    justify-content: center;
`
const Icon = styled.a`
text-decoration: none;
color: #fdfbdc;
`


export default function Footer() {
  return (
    <Container>
        <Heading>Contacts
        <hr style={{width: "400px",}}/>
        </Heading>
        <SubContainer>
            <SubHeading>EMAIL</SubHeading>
            <Email>tanvee.6352@gmail.com</Email>
        </SubContainer>
        <SubContainer>
            <SubHeading>
                SOCIALS
            </SubHeading>
            <IconContainer>
                <Icon href='https://www.linkedin.com/in/tanvi-sharma-66537a1b7/' target="_blank" rel="noopener noreferrer">
                <LinkedInIcon style={{fontSize: "40px", paddingRight:"15px" }}/>
                </Icon>
                <Icon href='https://github.com/tanie05/' target="_blank" rel="noopener noreferrer">
                <GitHubIcon style={{fontSize: "37px"}} />
                </Icon>
                
                
            </IconContainer>
        </SubContainer>
        
    </Container>
  )
}
