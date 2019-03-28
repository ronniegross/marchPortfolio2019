import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    a {
        /* text-decoration: none; */
        color: #2F2F2F;
    }
`

export default class Resume extends Component {
    render() {
        return (
            <div>
                <Container>
                    <a href="https://drive.google.com/file/d/1Z4yj2Txnc-mZU_uZbfTl0Z1NKqz7UrT-/view?usp=sharing">Link to PDF resume</a>
                </Container>
            </div>
        )
    }
}

