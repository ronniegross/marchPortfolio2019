import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Contact from './Contact.js'

const Container = styled.div`
    a {
        text-decoration: none;
        color: #FF3100;
        margin-left: 40px;
    }
    img {
        width: 75%;
    }
    @media (max-width: 1100px) {
        img {
            width: 90%;
        }
    }
    @media (max-width: 800px) {
        img {
            width: 100%;
        }
        a {
            margin-left: 20px;
        }
    }
`

export default class Resume extends Component {
    render() {
        return (
            <div>
                <Container>
                    <a href="https://drive.google.com/file/d/1AEXox1W2kUYw_fDcjKYxfQ0UqG_zG6Aq/view?usp=sharing">Link to PDF resume</a>
                    <div>
                        <img src="https://i.imgur.com/EBWf9Zb.jpg" alt="resumeJPG" />
                    </div>
                </Container>
                <Contact />
            </div>
        )
    }
}

