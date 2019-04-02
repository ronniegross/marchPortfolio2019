import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavContainer = styled.div`
    height: 60px;
    background-color: #FFDC78;
    margin: 30px 0 20px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 110%;
    ul {
        list-style-type: none;
        margin: 0 0 0 30px;
        padding: 0;
        display: flex;
        flex-direction: row;
    }
    li {
        padding: 0 20px 0 20px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 18px;
        font-weight: 700;

    }
    a {
        text-decoration: none;
        color: #2F2F2F;
    }
    @media (max-width: 500px) {
        align-items: center;
        justify-content: space-around;
        margin: 10px 0 20px 0;
        align-items: center;
        width: 100%;
        a {
            font-size: 18px;
        }
        ul {
            margin: 0;
        }
    }
`

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <NavContainer>
                    <ul>
                        <li><Link to="/">Projects</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/resume">Resume</Link></li>
                        {/* <li><Link to="/contact">Contact</Link></li> */}
                    </ul>
                </NavContainer>
            </div>
        )
    }
}
