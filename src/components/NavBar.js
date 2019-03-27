import React, { Component } from 'react'
import styled from 'styled-components'

const NavContainer = styled.div`
    height: 60px;
    background-color: #FFDC78;
    margin: 30px 0 20px 0;
    display: flex;
    align-items: center;
    ul {
        list-style-type: none;
        margin: 0 0 0 50px;
        padding: 0;
        display: flex;
        flex-direction: row;
    }
    li {
        padding-right: 30px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 18px;
        font-weight: 700;
    }
    a {
        text-decoration: none;
        color: #2F2F2F;
    }
`

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <NavContainer>
                <ul>
                    <a href="/"><li>Projects</li></a>
                    <a href="/about"><li>About</li></a>
                    <a href="/resume"><li>Resume</li></a>
                    <a href="/contact"><li>Contact</li></a>
                </ul>
                </NavContainer>
            </div>
        )
    }
}
