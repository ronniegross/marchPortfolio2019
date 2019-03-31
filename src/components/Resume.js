import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
                    <a href="https://drive.google.com/file/d/1E6_p-J4KGn5O9cxZjcJW38DGiKJSZJ6Q/view?usp=sharing">Link to PDF resume</a>
                    <div>
                        <img src="https://i.imgur.com/mktG12j.jpg" alt="resumeJPG" />
                    </div>
                </Container>
            </div>
        )
    }
}

